#!/bin/bash

# Build microservices
echo "Building microservices..."
./build-microservices.sh

# Build and deploy front-end
echo "Building and deploying front-end..."
cd react-app
npm install
npm run build

# Start microservices
echo "Starting microservices..."
java -jar ../microservices/Authenticator/target/Authenticator.jar &
java -jar ../microservices/scheduler/target/scheduler.jar &
java -jar ../microservices/spring-api/target/spring-api.jar &

# Start Node.js server
echo "Starting Node.js server..."
node index.js &
