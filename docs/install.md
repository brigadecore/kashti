# Installing Kashti, the Brigade User Interface

This document covers the installation of Kashti into a Kubernetes cluster. Kashti
developers will find developer-specific documentation in the [Developer Guide](developers.md).

Kashti is a client-side JavaScript application. It makes requests to the Brigade API
server (which is installed as part of Brigade). **The browser that Kashti is run from
_must_ have access to the Brigade API server.**

## Kubernetes Installation

To install the Brigade UI to a Kubernetes cluster:

1. [Install Brigade](https://github.com/Azure/brigade)
2. Get the IP address or hostname of the Brigade API service. You can often do this with `helm status brigade`
3. Clone this repo and `cd` into the root of the repo
3. Install the chart: `helm install chart/kashti --brigade.apiServer=http://IP:7745`, where IP is the
  IP or hostname of the Brigade API service. See Option 1 and Option 2 below to
  determine which value to put here.

_The address or hostname in `brigade.apiServer` is the location that the browser
will contact to get information about your projects, builds, and jobs._

To access Kashti from a browser outside of a cluster, you have two options at the
moment:

1. Open a tunnel from the browser to the destination cluster.
2. Allow outside access to your API and Kashti deployments.

> OAuth2 authentication is on the roadmap, but not yet complete. At this point,
> opening the service to the outside world will allow unauthenticated access
> to your project's dashboard.

Both examples below assume you are in the root of the checked-out Kashti git
repository.

## Option 1: Tunnel from Local Browser to Cluster Services

In this example, we will allow the browser to proxy HTTP requests into the cluster
without opening up the cluster hosts to public traffic.

First, you must setup Brigade. The normal Brigade installation will work fine here:

```console
$ helm repo add brigade https://azure.github.io/brigade
$ helm install -n brigade brigade/brigade
```

Once Brigade is running, you can install Kashti, setting the API server endpoint
to your localhost.

```console
$ helm install -n kashti ./charts/kashti --set brigade.apiServer=http://localhost:7745
```

This will install Kashti, and configure it _specifically for tunneling_. Now you
will need to start two port-forwarding tunnels in the background: One to Kashti
and the other to the Brigade API server:

```console
$ kubectl get po | grep brigade-brigade-api | awk '{ print $1 }'
brigade-brigade-api-559fb8df99-kz5wl
$ kubectl port-forward brigade-brigade-api-559fb8df99-kz5wl 7745 
$ kubectl get po | grep kashti | awk '{ print $1 }'
kashti-kashti-54bf55b988-dsbhf
$ kubectl port-forward kashti-kashti-54bf55b988-dsbhf 8080:80 &
```

At this point, you have:

- Kashti listening on http://localhost:8080/kashti/. This is the URL you put in your browser.
- Brigade API listening on http://localhost:7745, with Kashti automatically configed
  to talk to it.


## Option 2: Allow Outside Access to Your Services

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
$ helm install -n brigade brigade/brigade --set api.service.type=LoadBalancer
```

(If your cluster does not support LoadBalancer, look at the Ingress control
documentation in `helm inspect values brigade/brigade`.)

Now you need to wait until the Brigade API service gets a public IP, and then
install Kashti

```
$ kubectl get --no-headers svc brigade-brigade-api | awk '{ print $4 }'
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
