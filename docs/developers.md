# The Kashti Developer Guide

This guide explains how to work on the Kashti codebase.

## Prerequisites

- Docker
- make

## Clone Repo and Build Dependencies

Begin by cloning this repository with your favorite Git tool.

```console
$ git clone git@github.com:brigadecore/kashti.git
$ cd kashti
```

## Containerized Development Environment

To ensure a consistent development environment for all contributors, Kashti
relies heavily on Docker containers as sandboxes for all development activities
including dependency resolution, executing tests, or running a development
server.

`make` targets seamlessly handle the container orchestration.

To execute dependency resolution (i.e. `yarn install`):

```console
$ make yarn-install
```

Note that if any NPM modules have binary extensions, this will build those
extensions for use within the container (i.e. for Linux).

Generally, you do not need to explicitly execute dependency resolution because
it is automatically executed before other common `make` targets:

To execute lint checks:

```console
$ make lint
```

To execute tests:

```console
$ make test
```

To execute e2e tests:

```console
$ make e2e
```

To run the ng development server (in a container, of course):

```console
$ make serve
```

## Building Images

To build a Docker image for Kashti:

```console
$ make build
```

## Pushing Images

By default, built images are named using the following scheme:
`kashti:<version>`. If you wish to push customized or experimental images
you have built from source to a particular org on a particular Docker registry,
this can be controlled with environment variables.

The following, for instance, will build images that can be pushed to the
`krancour` org on Dockerhub (the registry that is implied when none is
specified).

```console
$ DOCKER_ORG=krancour make build
```

To build for the `krancour` org on a different registry, such as `quay.io`:

```console
$ DOCKER_REGISTRY=quay.io DOCKER_ORG=krancour make build
```

Images built with names that specify registries and orgs for which you have
write access can be pushed using `make push`. Note that the
`build` target is a dependency for the `push` target, so
the build _and_ push processes can be accomplished together like so:

```console
$ DOCKER_REGISTRY=quay.io DOCKER_ORG=krancour make push-all-images
```

Note also that you _must_ be logged into the registry in question _before_
attempting this.

## Deployment

Kashti can be run locally via `make serve`.

To install in a Kubernetes development cluster, we recommend using the Helm [Brigade chart][brigade-chart]
located in the [brigadecore/charts][charts] repo.  As of Brigade chart version `0.19.3`, Kashti
is installed by default.  (Kashti can also be installed standalone via its [chart][kashti-chart].)

If you are running Minikube, you can do a full build of this repo into a Docker
image and run it (without even having to push to a remote registry):

```console
$ eval $(minikube docker-env)
$ make build
$ helm repo add brigade https://brigadecore.github.io/charts
$ helm install -n brigade brigade/brigade --set image.repository=krancour --set image.tag=123456
```

Then, use `brig dashboard` to start a tunnel to the Kashti pod inside your cluster.

[kashti-chart]: https://github.com/brigadecore/charts/tree/master/charts/kashti
[brigade-chart]: https://github.com/brigadecore/charts/tree/master/charts/brigade
[charts]: https://github.com/brigadecore/charts
