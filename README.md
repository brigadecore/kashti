Front-end for the [Brigade](https://github.com/azure/brigade) project.

[![demo-ui](https://user-images.githubusercontent.com/686194/29797449-f7be1f90-8c0b-11e7-8b39-92133d91c2d5.gif)](https://deis.github.io/brigade-ui/)

--  

## Prototype

This repo is currently a working prototype which can be [viewed here: brigade-ui](https://deis.github.io/brigade-ui/)  
Built on the foundation app framework, as an angular app. Design plans for the UI can be [viewed here](https://aka.ms/acicd-flow-wires).

## Development

Install dependancies and run the app with these commands. If bower asks for clarification, opt to install angular `1.4.14`.

```
npm install && bower install
npm start
```

## Deployment

The UI prototype is deployed via a `gulp deploy`.

## Kubernetes Installation

To install the Brigade UI to a Kubernetes cluster:

1. Ensure that Brigade is already running
2. Install the chart: `helm install chart/kashti`

If you are running Minikube, you can do a full build of this repo into a Docker
image:

```
$ eval $(minikube docker-env)
$ npm docker-build
$ helm install -n brigade-ui chart/kashti --set brigade.apiServer=https://example.com:7745
```

This will push a copy of the Docker image into your Minikube docker registry and
then install the chart.

The value of `brigade.apiServer` should be the fully qualified URL to your Brigade
installation's API server. This is the URL that the _client_ will see, so you
may need to use the outside IP address, not the cluster IP.
