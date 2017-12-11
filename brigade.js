const { events, Job, Group } = require("brigadier");

events.on("build", (e, p) => {

  // This is just a canary build to make sure everything is working.
  const build = new Job("build", "node:8")
  build.tasks = [
    "cd /src",
    "yarn install",
    "yarn gulp build"
  ]

  build.run()

});

events.on("exec", (e, p) => {
  // This does some pointlessly complex stuff so that you can test the
  // dashboard.
  var j1 = alpineJob("one")
  var j2 = alpineJob("two")
  var j3 = alpineJob("three")
  var j4 = alpineJob("four")
  var j5 = alpineJob("five")

  j1.run().then( () => { return j2.run() }).then( () => {
    var g = new Group()
    g.add(j3)
    g.add(j4)
    g.runAll().then( () => {j5.run()})
  })
});

function alpineJob(name) {
  return new Job(name, "alpine:3.7", ["echo hello from " + name, "sleep 5"])
}
