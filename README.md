Kashti is a dashboard for your [Brigade](https://github.com/azure/brigade) pipelines.

![kashti-animation](https://user-images.githubusercontent.com/686194/33646819-7d19d222-da06-11e7-8513-82e521fda608.gif)

---

[Brigade](//brigade.sh) provides event-driven scripting for Kubernetes. With a simple JavaScript
file, you can build elaborate pipelines composed of multiple containers running
in parallel or serially. Among other possible applications, Brigade can be used
to build highly flexible CI/CD pipelines.

Kashti is a web dashboard for Brigade, helping you easily visualize and inspect your
Brigade builds. Kashti gives you a deep view into your Brigade projects, scripts,
and jobs.

This repo has a self-hosted [demo](https://azure.github.io/kashti/)

## Installation and Configuration

Kashti is built atop Brigade. You can read the full [Installation Guide](docs/install.md) to see how to install it into a cluster that already runs Brigade.

## Kashti is Experimental

Kashti is in an early stage of development. To get started coding on Kashti, check out the [Developer Guide](docs/developers.md)
