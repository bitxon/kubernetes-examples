# Use CronJob to trigger application via HTTP

## Setup
1. Start Kubernetes cluster
    ```shell
    minikube start --addons metrics-server
    ```
2. Start Application & Monitoring 
    ```shell
    skaffold run --port-forward=user
    ```
3. Get Password for Grafana
    ```shell
    kubectl get secret --namespace monitoring grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
    ```
4. Open [Grafana](http://localhost:3000/dashboards) using\
   login: `admin`\
   password: `<SEE-PREVIOUS-STEP>`

## Setup Grafana Using Helm
```shell
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update

# Prometheus - http://prometheus-server.monitoring.svc.cluster.local
kubectl create namespace monitoring
helm install prometheus prometheus-community/prometheus --namespace monitoring
kubectl get pods -n monitoring

export POD_NAME=$(kubectl get pods --namespace monitoring -l "app.kubernetes.io/name=prometheus,app.kubernetes.io/instance=prometheus" -o jsonpath="{.items[0].metadata.name}")
kubectl --namespace monitoring port-forward $POD_NAME 9090

# Grafana
helm install grafana grafana/grafana --namespace monitoring

kubectl get secret --namespace monitoring grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo

export POD_NAME=$(kubectl get pods --namespace monitoring -l "app.kubernetes.io/name=grafana,app.kubernetes.io/instance=grafana" -o jsonpath="{.items[0].metadata.name}")
kubectl --namespace monitoring port-forward $POD_NAME 3000
```

## Useful Boards
| ID    | URL                                                                  |
|-------|----------------------------------------------------------------------|
| 15757 | https://grafana.com/grafana/dashboards/15757-kubernetes-views-global |
| 15760 | https://grafana.com/grafana/dashboards/15760-kubernetes-views-pods   |
| 19105 | https://grafana.com/grafana/dashboards/19105-prometheus              |
