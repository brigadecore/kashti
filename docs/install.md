# Installing Kashti, the Brigade User Interface

This document covers the installation of Kashti into a Kubernetes cluster. Kashti
developers will find developer-specific documentation in the [Developer Guide](developers.md).

Kashti is a client-side JavaScript application. It makes requests to the Brigade API
server (which is installed as part of Brigade). We will use the `brig` command line to create HTTP tunnels to the Brigade API server and to the Kashti dashboard.

> If you don't have the `brig` command line already, [check out the Brigade documentation on how to build it](https://github.com/Azure/brigade/blob/master/docs/topics/developers.md#building-source) 

## Kubernetes Installation

As of Brigade chart version `0.19.3`, Kashti is installed by default.

To install Brigade and the Kashti UI to a Kubernetes cluster:

1. [Install Brigade](https://github.com/Azure/brigade)
1. Clone this repo and `cd` into the root of the repo
1. `helm repo add brigade https://azure.github.io/brigade-charts`
1. `helm install -n brigade brigade/brigade`
1. `brig dashboard` - then access through your browser at http://localhost:8081

> You can specify another port to access the dashboard by using `brig dashboard --port <another-port>`

Since Kashti is installed with Brigade (>= `0.19.3`) by default, there is no need to expose
the Brigade API server just to allow the Kashti server to communicate with it.

## Allow Outside Access to Kashti

If we desire to expose the Kashti UI, we can do so with the following approaches.

### Without SSL/TLS

The easiest (but insecure) way to do this is to expose the Kashti server endpoint via
either an Ingress resource or a Service of type LoadBalancer.  Here we employ the latter:

```
$ helm install -n brigade brigade/brigade --set kashti.service.type=LoadBalancer
```

At this point, you will be able to access the Kashti dashboard at the load balancer
endpoint shown by this command:

```
$ kubectl get --no-headers svc kashti-kashti | awk '{ print $4 }'
```

Thus, your URL will be something like `http://10.21.77.4/kashti/`.

### With SSL/TLS

If you want to add SSL/TLS to your Kashti setup for additional security, we recommend
doing this via the standard Kubernetes way.

- Configure TLS/SSL for the Kashti deployment
  - We recommend using [Kube LEGO](https://github.com/kubernetes/charts/tree/master/stable/kube-lego)
