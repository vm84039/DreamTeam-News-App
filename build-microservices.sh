#!/bin/bash

echo "Building Spring Boot .jar files..."
sleep 3

AUTHDIR="Authenticator"
SCHEDULERDIR="scheduler"
SPRINGAPIDIR="spring-api"

cd ./microservices/$AUTHDIR

echo "Building Authenticator..."
echo "---------------------"
echo "command: ./gradlew build"
./gradlew build
sleep 3

cd ../$SCHEDULERDIR
echo "Building scheduler..."
echo "---------------------"
echo "command: ./gradlew build"
./gradlew build
sleep 3

cd ../$SPRINGAPIDIR
echo "Building spring-api..."
echo "---------------------"
echo "command: ./gradlew build"
./gradlew build
sleep 3

echo "Microservices built successfully!"
