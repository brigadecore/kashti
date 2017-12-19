const {events, Job, Group} = require('brigadier');

events.on('push', (e, project) => {
  // Make sure this matches your host Kubernetes' Docker settings, even though
  // this is DinD.
  const driver = project.secrets.DOCKER_DRIVER || 'overlay';

  // Build and test in prod configuration.
  const prodBuild = new Job('prod', 'node:8');
  /*
  ProdBuild.cache.enabled = true
  prodBuild.cache.path = "/src/node_modules"
  */
  prodBuild.tasks = [
    'cd /src',
    'yarn install',
    'yarn build'
  ];

  // Build and test in dev configuration.
  const devBuild = new Job('dev', 'node:8');
  devBuild.tasks = [
    'cd /src',
    'yarn install',
    'yarn build'
  ];

  // Build and push a Docker image.
  const docker = new Job('dind', 'docker:stable-dind');
  docker.privileged = true;
  docker.env = {
    DOCKER_DRIVER: driver
  };
  docker.tasks = [
    'dockerd-entrypoint.sh &',
    'sleep 20',
    'cd /src',
    'docker pull deis/kashti:canary || true',
    'docker build -t deis/kashti:canary .'
  ];

  // If a Docker user is specified, we push.
  if (project.secrets.DOCKER_USER) {
    docker.env.DOCKER_USER = project.secrets.DOCKER_USER;
    docker.env.DOCKER_PASS = project.secrets.DOCKER_PASS;
    docker.env.DOCKER_REGISTRY = project.secrets.DOCKER_REGISTRY;
    docker.tasks.push('docker login -u $DOCKER_USER -p $DOCKER_PASS $DOCKER_REGISTRY');
    docker.tasks.push('docker push deis/kashti:canary');
  } else {
    console.log('skipping push. DOCKER_USER is not set.');
  }

  // Run prod/dev in parallel. Once both finish, run docker build.
  Group.runAll([prodBuild, devBuild]).then(() => {
    return docker.run();
  });
});

events.on('exec', (e, p) => {
  // This does some pointlessly complex stuff so that you can test the
  // dashboard.
  const j1 = alpineJob('one');
  const j2 = alpineJob('two');
  const j3 = alpineJob('three');
  const j4 = alpineJob('four');
  const j5 = alpineJob('five');

  j1.run().then(() => {
    return j2.run();
  }).then(() => {
    const g = new Group();
    g.add(j3);
    g.add(j4);
    g.runAll().then(() => {
      j5.run()
      ;
    });
  });
});

function alpineJob(name) {
  return new Job(name, 'alpine:3.7', ['echo hello from ' + name, 'sleep 5']);
}
