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
curl -m 3 --resolve "application-ingress.info:80:127.0.0.1" -i http://application-ingress.info/hello --header 'Authorization: Bearer SecretToken'
```

## Generate secret for basic auth
```shell
htpasswd -nb 'username' 'password' | base64
```

## Links
[Kubernetes OAuth External](https://kubernetes.github.io/ingress-nginx/examples/auth/oauth-external-auth/)