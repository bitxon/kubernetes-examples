# Use CronJob to trigger application via HTTP

## Setup Minikube

```shell
minikube start
```

## Setup Application

```shell
skaffold dev
```

## See logs (Should appear every minute)

```log
[application] Listening on localhost:8080
[application] GET http://application-service:8080/hello null
[application] GET http://application-service:8080/hello null

```
