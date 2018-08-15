# Installing Kashti, the Brigade User Interface

This document covers the installation of Kashti into a Kubernetes cluster. Kashti
developers will find developer-specific documentation in the [Developer Guide](developers.md).

Kashti is a client-side JavaScript application. It makes requests to the Brigade API
server (which is installed as part of Brigade). We will use the `brig` command line to create HTTP tunnels to the Brigade API server and to the Kashti dashboard.

> If you don't have the `brig` command line already, [check out the Brigade documentation on how to build it](https://github.com/Azure/brigade/blob/master/docs/topics/developers.md#building-source) 

## Kubernetes Installation

To install the Brigade UI to a Kubernetes cluster:

1. [Install Brigade](https://github.com/Azure/brigade)
2. Clone this repo and `cd` into the root of the repo
3. `helm install -n kashti ./charts/kashti`
4. `brig dashboard` - then access through your browser at http://localhost:8081

> You can specify another port to access the dashboard by usig `brig dashboard --port <another-port>`

## Allow Outside Access to Your Services

You may choose to open up a pair of services to the outside network and allow
inbound traffic. The two services you will need to expose are:

- The Brigade API server: This serves information about builds, jobs, and projects.
- The Kashti server: This services static assets, such as the Kashti dashboard.

### Without SSL/TLS

The easiest (but insecure) way to do this is to expose both of those endpoints via
either an ingress or a Service loadbalancer.

For example, to use built-in service load balancers, run these commands:

```console
$ helm repo add brigade https://azure.github.io/brigade
$ helm install brigade/brigade --name brigade-server --set api.service.type=LoadBalancer
```

(If your cluster does not support LoadBalancer, look at the Ingress control
documentation in `helm inspect values brigade/brigade`.)

Now you need to wait until the Brigade API service gets a public IP, and then
install Kashti

```
$ kubectl get --no-headers svc brigade-server-brigade-api | awk '{ print $4 }'
10.0.0.77  # Should be a public IP, not like this example
$ helm install -n kashti ./charts/kashti --set service.type=LoadBalancer \
  --set brigade.apiServer=http://10.0.0.77:7745
```

> You can also use a DNS name for `apiServer` if you have mapped the IP to a
> name. Note that the browser will have to be able to resolve the name.

Note that (if load balancing is enabled for your cluster), you will now have two
unsecured endpoints.

At this point, you will be able to access the Kashti dashboard at the load balancer
endpoint shown by this command:

```
$ kubectl get --no-headers svc kashti-kashti | awk '{ print $4 }'
```

Thus, your URL will be something like `http://10.21.77.4/kashti/`.

### With SSL/TLS

If you want to add SSL/TLS to your Kashti setup for additional security, we recommend
doing this via the standard Kubernetes way.

- Configure TLS/SSL for the Brigade API endpoint and also to the Kashti deployment
  - We recommend using [Kube LEGO](https://github.com/kubernetes/charts/tree/master/stable/kube-lego)
- Point `brigade.apiServer` to the external hostname or IP (`--brigade.apiServer=https://outside.example.com:7745`)
