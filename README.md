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

# The Kashti Developer Guide

This guide explains how to work on the Kashti codebase.

## Clone Repo and Build Dependencies

Begin by cloning this repository with your favorite Git tool.

```console
$ git clone git@github.com:Azure/kashti.git
$ cd kashti
$ yarn global add @angular/cli
$ yarn install                      # install project dependencies
```

## Kashti Development
```console
$ ng serve                          # start a local server in development mode
$ ng serve --environment prod       # start a local server in production mode (minification, uglification, etc.)
$ ng lint                           # run linters 
$ ng test                           # run unit tests
$ ng e2e                            # run e2e tests in Chrome
$ yarn e2e:watch                    # run e2e tests in watch mode. Be sure to run `ng serve` first!
```

`ng serve`, `ng test`, and `ng e2e:watch` will watch for changes to the project and automatically recompile the application and if running tests, re-run tests against the latest changes.

We require all tests to pass before merging pull requests (and ideally, all commits should be good individually, too).

### Deployment

Kashti can be run locally via a `ng serve`.

To install in a Kubernetes development cluster, we recommend using the chart.

If you are running Minikube, you can do a full build of this repo into a Docker
image:

```console
$ eval $(minikube docker-env)
$ yarn docker-build
$ helm install -n brigade-ui chart/kashti --set brigade.apiServer=http://localhost:7745
```

This will push a copy of the Docker image into your Minikube docker registry and
then install the chart.

The value of `brigade.apiServer` should be the fully qualified URL to your Brigade
installation's API server. This is the URL that the _client_ will see, so you
may need to use the outside IP address, not the cluster IP.

The example above can be used along with a few `kubectl port-forward` commands to
locally access your Kashti UI. See the [Install Guide](install.md) for more.
