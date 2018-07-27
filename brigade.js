const { events, Job, Group } = require("brigadier");

const projectName = "kashti";

class TestJob extends Job {
  constructor(name) {
    super(name, "node:8");
    this.tasks = [
      "cd /src",
      "yarn install",
      "ng lint",
      "ng test --single-run",
    ];
  }
}

class E2eJob extends Job {
  constructor(name) {
    super(name, "node:8");
    this.tasks = [
      "cd /src",
      "yarn install",
      "ng e2e"
    ];
  }
}

class ACRBuildJob extends Job {
  constructor(name, img, tag, dir, registry, token, tenant) {
    super(name, "microsoft/azure-cli:latest");
    let imgName = img + ":" + tag;
    let latest = img + ":latest";
    this.env = {
      AZURE_CONTAINER_REGISTRY: registry,
      ACR_TOKEN: token,
      ACR_TENANT: tenant,
    }
    this.tasks = [
      // Create a service principal and assign it proper perms on the container registry.
      `az login --service-principal -u $AZURE_CONTAINER_REGISTRY -p $ACR_TOKEN --tenant $ACR_TENANT`,
      `cd ${dir}`,
      `echo '========> building ${img}...'`,
      `az acr build -r ${registry} -t ${imgName} -t ${latest} .`,
      `echo '<======== finished building ${img}.'`
    ];
  }
}

function ghNotify(state, msg, e, project) {
  const gh = new Job(`notify-${state}`, "technosophos/github-notify:latest");
  gh.env = {
    GH_REPO: project.repo.name,
    GH_STATE: state,
    GH_DESCRIPTION: msg,
    GH_CONTEXT: "brigade",
    GH_TOKEN: project.secrets.ghToken,
    GH_COMMIT: e.revision.commit
  }
  return gh
}

events.on("push", (e, project) => {
  const gh = JSON.parse(e.payload);
  const start = ghNotify("pending", `build started as ${e.buildID}`, e, project)
  if (gh.ref.startsWith("refs/tags/") || gh.ref == "refs/heads/master") {
    let parts = gh.ref.split("/", 3);
    let tag = parts[2];
    var releaser = new ACRBuildJob(`${projectName}-release`, projectName, tag, "/src", project.secrets.acrName, project.secrets.acrToken, project.secrets.acrTenant);
    Group.runAll([start, releaser])
      .catch(err => {
        return ghNotify("failure", `failed build ${e.buildID}`, e, project).run()
      });
  } else {
    console.log('not a tag or a push to master; skipping')
  }
  return ghNotify("success", `build ${e.buildID} passed`, e, project).run()
});

function test() {
  const test = new TestJob(`${projectName}-test`)
  const e2e = new E2eJob(`${projectName}-e2e`)
  return Group.runAll([test, e2e]);
}

events.on("pull_request", test);
events.on("exec", test);
