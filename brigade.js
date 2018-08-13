const { events, Job, Group } = require("brigadier");

events.on("push", (e, project) => {
  // Make sure this matches your host Kubernetes' Docker settings, even though
  // this is DinD.
  var driver = project.secrets.DOCKER_DRIVER || "overlay"

  const unitTests = new Job("dev", "deis/node-chrome:node8")
  unitTests.tasks = [
    "cd /src",
    "yarn install",
    "yarn global add @angular/cli",
    "ng lint",
    "ng test --browsers=ChromeHeadless",
    "ng e2e"
  ]

  // Build and push a Docker image.
  const docker = new Job("dind", "docker:stable-dind")
  docker.privileged = true;
  docker.env = {
    DOCKER_DRIVER: driver
  }
  docker.tasks = [
    "dockerd-entrypoint.sh &",
    "sleep 20",
    "cd /src",
    "docker pull deis/kashti:canary || true",
    "docker build -t deis/kashti:canary ."
  ];

  // If a Docker user is specified, we push.
  if (project.secrets.DOCKER_USER) {
    docker.env.DOCKER_USER = project.secrets.DOCKER_USER
    docker.env.DOCKER_PASS = project.secrets.DOCKER_PASS
    docker.env.DOCKER_REGISTRY = project.secrets.DOCKER_REGISTRY
    docker.tasks.push("docker login -u $DOCKER_USER -p $DOCKER_PASS $DOCKER_REGISTRY")
    docker.tasks.push("docker push deis/kashti:angular5")
  } else {
    console.log("skipping push. DOCKER_USER is not set.");
  }

  // Run unit and e2e tests in parallel. Once both finish, run docker build.
  Group.runAll([unitTests]).then(() => {
    return docker.run()
  });
});

events.on("exec", (e, p) => {
  // This does some pointlessly complex stuff so that you can test the
  // dashboard.
  var j1 = alpineJob("one")
  var j2 = alpineJob("two")
  var j3 = alpineJob("three")
  var j4 = alpineJob("four")
  var j5 = alpineJob("five")

  j1.run().then(() => { return j2.run() }).then(() => {
    var g = new Group()
    g.add(j3)
    g.add(j4)
    g.runAll().then(() => { j5.run() })
  })
});

function alpineJob(name) {
  return new Job(name, "alpine:3.7", ["echo hello from " + name, "sleep 5"])
}
