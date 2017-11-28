# The Kashti Developer Guide

This guide explains how to work on the Kashti codebase.

## Clone Repo and Build Dependencies

Begin by cloning this repository with your favorite Git tool.

Install dependancies and run the app with these commands. If bower asks for clarification, opt to install angular `1.4.14`.

```
npm install && bower install
npm start
```

### Deployment

The UI prototype can be deployed locally via a `gulp deploy`.

To install in a Kubernetes development cluster, we recommend using the chart.

If you are running Minikube, you can do a full build of this repo into a Docker
image:

```
$ eval $(minikube docker-env)
$ npm run-script docker-build
$ helm install -n brigade-ui chart/kashti --set brigade.apiServer=http://localhost:7745
```

This will push a copy of the Docker image into your Minikube docker registry and
then install the chart.

The value of `brigade.apiServer` should be the fully qualified URL to your Brigade
installation's API server. This is the URL that the _client_ will see, so you
may need to use the outside IP address, not the cluster IP.

The example above can be used along with a few `kubectl port-forward` commands to
locally access your Kashti UI. SEe the [Install Guide](install.md) for more.

