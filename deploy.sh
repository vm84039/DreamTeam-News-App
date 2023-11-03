#!/bin/bash

echo "Building Spring Boot and React app..."
sleep 3

# Build React app
echo "Building React app..."
cd react-app
npm install
npm run build
cd ..

# Build Spring Boot microservices with Gradle
echo "Building Spring Boot microservices..."
cd microservices/Authenticator
./gradlew build
cd ../..

cd microservices/scheduler
./gradlew build
cd ../..

cd microservices/spring-api
./gradlew build
cd ../..

echo "Microservices and React app built successfully!"
