## Setup Minikube
```shell
minikube start --addons=ingress,ingress-dns
kubectl get pods -n ingress-nginx
```

## Setup Application
```shell
skaffold dev
```

## Tunnel for testing
```shell
minikube tunnel
# Check terminal during testing - it may require some actions/confirmations
```

## Test 
```shell
curl -m 3 --resolve "application-ingress.info:80:127.0.0.1" -i http://application-ingress.info/hello
```

## Links
[Nginx Traffic Mirror](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#mirror)\
[Ingress Minikube](https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/)