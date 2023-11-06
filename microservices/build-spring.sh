#!/bin/bash

echo "Building Spring Boot .jar files..."

AUTHDIR="Authenticator"
SCHEDULERDIR="scheduler"
SPRINGAPIDIR="spring-api"

cd "${AUTHDIR}"
echo "Building Authenticator..."
mvn clean install -DskipTests
if [ $? -ne 0 ]; then
    exit $?
fi
sleep 3

cd "../${SCHEDULERDIR}"
echo "Building scheduler..."
mvn clean install -DskipTests
if [ $? -ne 0 ]; then
    exit $?
fi
sleep 3

cd "../${SPRINGAPIDIR}"
echo "Building spring-api..."
mvn clean install -DskipTests
if [ $? -ne 0 ]; then
    exit $?
fi
sleep 3

echo "Spring Boot projects packaged as JAR files!"
echo "JAR files found in projects' target directories."
