FROM maven:3.9.3-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn -B -Daether.dependencyCollector.impl=bf dependency:go-offline
COPY src/ src/
RUN mvn -B clean package

FROM azul/zulu-openjdk-alpine:17.0.6-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
EXPOSE 8080/tcp