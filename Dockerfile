# Use an official Node image as a parent image for React app
FROM node:16.15.1 AS react-builder

WORKDIR /usr/src/react-app
COPY react-app/package*.json ./
RUN npm install
COPY react-app .
RUN npm run build

# Use an official OpenJDK runtime as a parent image for microservices
FROM openjdk:17

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the built React app from the previous stage
COPY --from=react-builder /usr/src/react-app/build /usr/src/app/react-app/build

# Copy Authenticator JAR file
COPY microservices/Authenticator/target/authenticator.jar ./authenticator.jar

# Copy Scheduler JAR file
COPY microservices/scheduler/target/scheduler.jar ./scheduler.jar

# Copy Spring API JAR file
COPY microservices/spring-api/target/spring-api.jar ./spring-api.jar

# Expose ports for the applications
EXPOSE 3000  # React app
EXPOSE 8082  # Authenticator
EXPOSE 8081  # Scheduler
EXPOSE 8080  # Spring API

# Define the command to start the applications
CMD ["java", "-jar", "authenticator.jar"]
