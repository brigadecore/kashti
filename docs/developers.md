# The Kashti Developer Guide

This guide explains how to work on the Kashti codebase.

## Clone Repo and Build Dependencies

Begin by cloning this repository with your favorite Git tool.

```console
$ git clone git@github.com:Azure/kashti.git
$ cd kashti
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
$ helm install -n kashti ./charts/kashti
```

This will push a copy of the Docker image into your Minikube docker registry and
then install the chart.

Then, use `brig proxy` to start a tunnel to the Kashti pod inside your cluster.
