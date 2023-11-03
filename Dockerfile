# Stage 1: Build React app
FROM node:14 AS react-build
WORKDIR /app/react-app
COPY react-app/ ./
RUN npm install
RUN npm run build

# Stage 2: Build Spring Boot microservices
FROM maven:3.8.3-openjdk-17 AS spring-build
WORKDIR /app/microservices
COPY microservices/Authenticator /app/microservices/Authenticator
COPY microservices/scheduler /app/microservices/scheduler
COPY microservices/spring-api /app/microservices/spring-api
WORKDIR /app/microservices/Authenticator
RUN mvn clean install -DskipTests
WORKDIR /app/microservices/scheduler
RUN mvn clean install -DskipTests
WORKDIR /app/microservices/spring-api
RUN mvn clean install -DskipTests

# Stage 3: Final image with built artifacts
FROM adoptopenjdk/openjdk17 AS final
WORKDIR /app
COPY --from=react-build /app/react-app/build /app/react-app/build
COPY --from=spring-build /app/microservices/Authenticator/target/*.jar /app/microservices/Authenticator/
COPY --from=spring-build /app/microservices/scheduler/target/*.jar /app/microservices/scheduler/
COPY --from=spring-build /app/microservices/spring-api/target/*.jar /app/microservices/spring-api/

# Your additional setup and configurations can be added here

# Start your microservices using a start command
CMD ["java", "-jar", "/app/microservices/Authenticator/authenticator-service.jar"]
