#!/bin/bash

# Start the Authenticator service in the background
echo "Starting Authenticator service..."
cd /usr/src/app/Authenticator/target
java -jar authenticator.jar &

# Start the Scheduler service in the background
cd /usr/src/app/scheduler/target
echo "Starting Scheduler service..."
java -jar scheduler.jar &

# Start the Spring API service in the background
echo "Starting Spring API service..."
cd /usr/src/app/spring-api/target
java -jar spring-api.jar &

# Start your Node.js server for React app (assuming it's not a single-page application)
echo "Starting Node.js server for React app..."
cd /usr/src/app/react-app
npm start &  # Replace 'server.js' with the actual entry point of your Node.js server

# Wait for all services to start (optional, adjust the sleep duration based on your application)
sleep 10

# Print a message indicating that all services have started
echo "All services started successfully."

# Keep the script running to keep the container alive
tail -f /dev/null
