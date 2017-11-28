Front-end for the [Brigade](https://github.com/azure/brigade) project.

[![demo-ui](https://user-images.githubusercontent.com/686194/29797449-f7be1f90-8c0b-11e7-8b39-92133d91c2d5.gif)](https://deis.github.io/brigade-ui/)

--

[Brigade](http://brigade.sh) provides event-driven scripting for Kubernetes. With a simple JavaScript
file, you can build elaborate pipelines composed of multiple containers running
in parallel or serially. Among other possible applications, Brigade can be used
to build highly flexible CI/CD pipelines.

Kashti is a web dashboard for Brigade, helping you easily visualize and inspect your
Brigade builds. Kashti gives you a deep view into your Brigade projects, scripts,
and jobs.

This repo has a self-hosted [demo](https://deis.github.io/brigade-ui/)

## Installation and Configuration

Kashti is built atop Brigade. You can read the full [Installation Guide](docs/install.md)
to see how to install it into a cluster that already runs Brigade.

## Kashti is Experimental

Kashti is in an early stage of development.

Built on the foundation app framework, as an angular app. Design plans for the UI can be [viewed here](https://aka.ms/acicd-flow-wires).
To get started coding on Kashti, check out the [Developer Guide](docs/developers.md)

