#!/bin/bash

echo "Building Spring Boot .jar files..."
sleep 3

AUTHDIR="Authenticator"
SCHEDULERDIR="scheduler"
SPRINGAPIDIR="spring-api"

cd ./microservices/$AUTHDIR

echo "Building Authenticator..."
echo "---------------------"
echo "command: mvn clean install -DskipTests"
mvn clean install -DskipTests
sleep 3

cd ../$SCHEDULERDIR
echo "Building scheduler..."
echo "---------------------"
echo "command: mvn clean install -DskipTests"
mvn clean install -DskipTests
sleep 3

cd ../$SPRINGAPIDIR
echo "Building spring-api..."
echo "---------------------"
echo "command: mvn clean install -DskipTests"
mvn clean install -DskipTests
sleep 3

echo "Spring Boot projects packaged as JAR files!"
echo "JAR files found in projects' target directories."
read -p "Press Enter to exit."

