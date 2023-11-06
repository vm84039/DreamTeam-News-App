# Stage 1: Build the React app
FROM node:14 AS react-builder

# Set the working directory inside the container for React app
WORKDIR /app/react-app

# Copy package.json and lock files from your local filesystem to the container
COPY react-app/package.json /app/react-app/package.json
COPY react-app/package-lock.json /app/react-app/package-lock.json

# Install dependencies
RUN npm install

# Copy the entire React app to the container
COPY react-app/ /app/react-app/

# Build the React app
RUN npm run build

# Stage 2: Build the Spring Boot applications and set up Java environment
FROM maven:3.8.3-openjdk-17 AS maven-builder

# Set the working directory inside the container for microservices
WORKDIR /usr/src/app/microservices

# Copy the Spring Boot JAR files from your local filesystem to the container
COPY microservices/Authenticator/target/authenticator.jar /usr/src/app/microservices/Authenticator/target/authenticator.jar
COPY microservices/scheduler/target/scheduler.jar /usr/src/app/microservices/scheduler/target/scheduler.jar
COPY microservices/spring-api/target/spring-api.jar /usr/src/app/microservices/spring-api/target/spring-api.jar

# Stage 3: Create the final image
FROM openjdk:17-jdk-slim

# Install Node.js and npm in the final image
RUN apt-get update && apt-get install -y nodejs npm

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the built React app, Spring Boot applications, and the custom script into the container
COPY --from=react-builder /app/react-app/build ./react-app/build/
COPY --from=react-builder /app/react-app/package.json ./react-app/package.json
COPY --from=react-builder /app/react-app/package-lock.json ./react-app/package-lock.json
COPY --from=react-builder /app/react-app/ ./react-app/
COPY --from=maven-builder /usr/src/app/microservices/Authenticator/target/authenticator.jar ./Authenticator/target/authenticator.jar
COPY --from=maven-builder /usr/src/app/microservices/scheduler/target/scheduler.jar ./scheduler/target/scheduler.jar
COPY --from=maven-builder /usr/src/app/microservices/spring-api/target/spring-api.jar ./spring-api/target/spring-api.jar
COPY start-services.sh .

# Set execute permissions for the custom script
RUN chmod +x start-services.sh

# Expose ports for the applications
EXPOSE 3000
EXPOSE 8081
EXPOSE 8082
EXPOSE 8083

# Define the default command to start services using the custom script
CMD ["./start-services.sh"]
