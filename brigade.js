const { events, Job, Group } = require("brigadier");

const img = "deis/node-chrome:node12";

const releaseTagRegex = /^refs\/tags\/(v[0-9]+(?:\.[0-9]+)*(?:\-.+)?)$/;

function tests() {
  // Create a new job to run tests
  var job = new Job("tests", img);
  // Set a few environment variables.
  job.env = {
    "SKIP_DOCKER": "true"
  };
  job.tasks = [
    "cd /src",
    "make lint test yarn-audit"
  ];
  return job;
}

function e2e() {
  // Create a new job to run e2e tests
  var job = new Job("e2e", img);
  // Set a few environment variables.
  job.env = {
    "SKIP_DOCKER": "true"
  };
  job.tasks = [
    "cd /src",
    "make e2e"
  ];
  return job;
}

function buildAndPublishImages(project, version) {
  let dockerRegistry = project.secrets.dockerhubRegistry || "docker.io";
  let dockerOrg = project.secrets.dockerhubOrg || "brigadecore";
  var job = new Job("build-and-publish-images", "docker:stable-dind");
  job.privileged = true;
  job.tasks = [
    "apk add --update --no-cache make git",
    "dockerd-entrypoint.sh &",
    "sleep 20",
    "cd /src",
    `docker login ${dockerRegistry} -u ${project.secrets.dockerhubUsername} -p ${project.secrets.dockerhubPassword}`,
    `DOCKER_REGISTRY=${dockerRegistry} DOCKER_ORG=${dockerOrg} VERSION=${version} make build-image push-image`,
    `docker logout ${dockerRegistry}`
  ];
  return job;
}

function runSuite(e, p) {
  // For the master branch, we build and publish images in response to the push
  // event. We test as a precondition for doing that, so we DON'T test here
  // for the master branch.
  if (e.revision.ref != "master") {
    // Important: To prevent Promise.all() from failing fast, we catch and
    // return all errors. This ensures Promise.all() always resolves. We then
    // iterate over all resolved values looking for errors. If we find one, we
    // throw it so the whole build will fail.
    //
    // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#Promise.all_fail-fast_behaviour
    //
    // Note: as provided test type string is used in job naming, it must consist
    // of lowercase letters and hyphens only (per Brigade/K8s restrictions)
    return Promise.all([
      runTests(e, p, tests).catch((err) => { return err }),
      runTests(e, p, e2e).catch((err) => { return err }),
    ])
      .then((values) => {
        values.forEach((value) => {
          if (value instanceof Error) throw value;
        });
      });
  }
}

// runTests is a Check Run that is run as part of a Checks Suite
function runTests(e, p, jobFunc) {
  console.log("Check requested");

  let job = jobFunc();

  // Create Notification object (which is just a Job to update GH using the Checks API)
  var note = new Notification(job.name, e, p);
  note.conclusion = "";
  note.title = `Run ${job.name}`;
  note.summary = `Running ${job.name} build/test targets for ${e.revision.commit}`;

  // Send notification, then run, then send pass/fail notification
  return notificationWrap(job, note);
}

// runCheck is the default function invoked on a check_run:* event
//
// It determines which check is being requested (from the payload body)
// and runs this particular check, or else throws an error if the check
// is not found
function runCheck(e, p) {
  payload = JSON.parse(e.payload);

  // Extract the check name
  name = payload.body.check_run.name;

  // Determine which check to run
  switch (name) {
    case "tests":
      return runTests(e, p, tests);
    case "e2e":
      return runTests(e, p, e2e);
    default:
      throw new Error(`No check found with name: ${name}`);
  }
}

// handleIssueComment handles an issue_comment event, parsing the comment text
// and determining whether or not to trigger an action
function handleIssueComment(e, p) {
  console.log("handling issue comment....")
  payload = JSON.parse(e.payload);

  // Extract the comment body and trim whitespace
  comment = payload.body.comment.body.trim();

  // Here we determine if a comment should provoke an action
  switch (comment) {
    // Currently, the do-all '/brig run' comment is supported,
    // for (re-)triggering the default Checks suite
    case "/brig run":
      return runSuite(e, p);
    default:
      console.log(`No applicable action found for comment: ${comment}`);
  }
}

// A GitHub Check Suite notification
class Notification {
  constructor(name, e, p) {
    this.proj = p;
    this.payload = e.payload;
    this.name = name;
    this.externalID = e.buildID;
    this.detailsURL = `https://brigadecore.github.io/kashti/builds/${e.buildID}`;
    this.title = "running check";
    this.text = "";
    this.summary = "";

    // count allows us to send the notification multiple times, with a distinct pod name
    // each time.
    this.count = 0;

    // One of: "success", "failure", "neutral", "cancelled", or "timed_out".
    this.conclusion = "neutral";
  }

  // Send a new notification, and return a Promise<result>.
  run() {
    this.count++;
    var job = new Job(`${this.name}-${this.count}`, "brigadecore/brigade-github-check-run:latest");
    job.imageForcePull = true;
    job.env = {
      "CHECK_CONCLUSION": this.conclusion,
      "CHECK_NAME": this.name,
      "CHECK_TITLE": this.title,
      "CHECK_PAYLOAD": this.payload,
      "CHECK_SUMMARY": this.summary,
      "CHECK_TEXT": this.text,
      "CHECK_DETAILS_URL": this.detailsURL,
      "CHECK_EXTERNAL_ID": this.externalID
    };
    return job.run();
  }
}

// Helper to wrap a job execution between two notifications.
async function notificationWrap(job, note) {
  await note.run();
  try {
    let res = await job.run();
    const logs = await job.logs();
    note.conclusion = "success";
    note.summary = `Task "${job.name}" passed`;
    // These jobs produce too much output to store in an environment variable
    // note.text = "```" + res.toString() + "```\nComplete";
    return await note.run();
  } catch (e) {
    const logs = await job.logs();
    note.conclusion = "failure";
    note.summary = `Task "${job.name}" failed for ${e.buildID}`;
    // These jobs produce too much output to store in an environment variable
    // note.text = "```" + logs + "```\nFailed with error: " + e.toString();
    try {
      await note.run();
    } catch (e2) {
      console.error("failed to send notification: " + e2.toString());
      console.error("original error: " + e.toString());
    }
    throw e;
  }
}

events.on("exec", (e, p) => {
  return Group.runAll([
    tests(),
    e2e(),
  ]);
});

events.on("push", (e, p) => {
  let matchStr = e.revision.ref.match(releaseTagRegex);
  if (matchStr) {
    // This is an official release with a semantically versioned tag
    let matchTokens = Array.from(matchStr);
    let version = matchTokens[1];
    return buildAndPublishImages(p, version).run();
  }
  if (e.revision.ref == "refs/heads/master") {
    // This runs tests then builds and publishes "edge" images
    return Group.runAll([
      tests(),
      e2e(),
    ])
      .then(() => {
        buildAndPublishImages(p, "").run();
      });
  }
});

events.on("check_suite:requested", runSuite);
events.on("check_suite:rerequested", runSuite);
events.on("check_run:rerequested", runCheck);
events.on("issue_comment:created", handleIssueComment);
events.on("issue_comment:edited", handleIssueComment);
