# Use Liveness, Readiness and Startup Probes

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
[2024-02-23T19:30:30.096Z] Listening on localhost:8080 with health delay 19000ms
[2024-02-23T19:30:40.096Z] GET http://10.244.0.22:8080/management/health/startup null --> 503
[2024-02-23T19:30:45.094Z] GET http://10.244.0.22:8080/management/health/startup null --> 503
[2024-02-23T19:30:50.092Z] GET http://10.244.0.22:8080/management/health/startup null --> 200
[2024-02-23T19:30:50.092Z] GET http://10.244.0.22:8080/management/health/readiness null --> 200
[2024-02-23T19:30:51.093Z] GET http://10.244.0.22:8080/management/health/readiness null --> 200
[2024-02-23T19:30:54.093Z] GET http://10.244.0.22:8080/management/health/readiness null --> 200
[2024-02-23T19:30:57.093Z] GET http://10.244.0.22:8080/management/health/readiness null --> 200
[2024-02-23T19:31:00.092Z] GET http://10.244.0.22:8080/management/health/readiness null --> 200
[2024-02-23T19:31:00.092Z] GET http://10.244.0.22:8080/management/health/liveness null --> 200
[2024-02-23T19:31:03.093Z] GET http://10.244.0.22:8080/management/health/readiness null --> 200
[2024-02-23T19:31:06.092Z] GET http://10.244.0.22:8080/management/health/readiness null --> 200
[2024-02-23T19:31:09.092Z] GET http://10.244.0.22:8080/management/health/readiness null --> 200
[2024-02-23T19:31:10.095Z] GET http://10.244.0.22:8080/management/health/liveness null --> 200


```
