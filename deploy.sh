#!/bin/bash

echo "Building Spring Boot .jar files..."
sleep 3

AUTHDIR="Authenticator"
SCHEDULERDIR="scheduler"
SPRINGAPIDIR="spring-api"
REACTAPPDIR="react-app"

# Build Spring Boot microservices using Docker
docker run --rm -v $(pwd)/microservices/$AUTHDIR:/app -w /app maven:3.8.3-openjdk-17 mvn clean install -DskipTests
docker run --rm -v $(pwd)/microservices/$SCHEDULERDIR:/app -w /app maven:3.8.3-openjdk-17 mvn clean install -DskipTests
docker run --rm -v $(pwd)/microservices/$SPRINGAPIDIR:/app -w /app maven:3.8.3-openjdk-17 mvn clean install -DskipTests

# Build React app using Docker
docker run --rm -v $(pwd)/$REACTAPPDIR:/app -w /app node:14 npm install
docker run --rm -v $(pwd)/$REACTAPPDIR:/app -w /app node:14 npm run build

echo "Microservices and React app built successfully!"
