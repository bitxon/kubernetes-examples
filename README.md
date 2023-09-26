## Setup Minikube
```shell
minikube start
minikube addons enable ingress
minikube addons enable ingress-dns
kubectl get pods -n ingress-nginx
minikube tunnel
# Check terminal during testing - it may require some actions/confirmations
```

## Setup Application
```shell
skaffold dev
```

## Test 
```shell
curl --resolve "application-ingress.info:80:127.0.0.1" -i http://application-ingress.info/hello
```


```shell
# in case of error like 'admission webhook "validate.nginx.ingress.kubernetes.io" denied the request'
kubectl delete -A ValidatingWebhookConfiguration ingress-nginx-admission
```

## Links
https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#mirror