# Use a Node.js base image for the React app
FROM node:14 AS react-builder
WORKDIR /app/react-app
COPY react-app/package*.json ./
RUN npm install
COPY react-app/ ./
RUN npm run build

# Use a Maven base image for building Spring Boot microservices
FROM maven:3.8.3-openjdk-17 AS maven-builder
WORKDIR /app/microservices
COPY microservices/ /app/microservices
RUN mvn clean install -DskipTests

# Use a Node.js base image for the final runtime environment
FROM node:14
WORKDIR /app
COPY --from=react-builder /app/react-app/build/ ./react-app/build/
COPY --from=maven-builder /app/microservices/Authenticator/target/*.jar ./microservices/Authenticator/
COPY --from=maven-builder /app/microservices/scheduler/target/*.jar ./microservices/scheduler/
COPY --from=maven-builder /app/microservices/spring-api/target/*.jar ./microservices/spring-api/
COPY deploy.sh ./

# Install Docker inside the container
RUN apt-get update && apt-get install -y docker.io

# Grant execute permissions to the deploy script
RUN chmod +x deploy.sh

# Start your application using the deploy script
CMD ["./deploy.sh"]
