@ECHO OFF
ECHO Building Spring Boot .jar files...
TIMEOUT 3 > NUL
SET AUTHDIR="Authenticator"
SET SCHEDULERDIR="scheduler"
SET SPRINGAPIDIR="spring-api"
SET NLM=^
SET NL=^^^%NLM%%NLM%^%NLM%%NLM%

cd ./microservices/%AUTHDIR%

ECHO Building Authenticator...&echo\---------------------&echo\

ECHO -----------------------------------------------&echo\command: mvn clean install -DskipTests&echo\-----------------------------------------------
call mvn clean install -DskipTests
TIMEOUT 3 > NUL

cd ../%SCHEDULERDIR%
ECHO -----------------------------------------------&echo\Building scheduler...&echo\---------------------&echo\
ECHO -----------------------------------------------&echo\command: mvn clean install -DskipTests&echo\-----------------------------------------------
call mvn clean install -DskipTests
TIMEOUT 3 > NUL

cd ../%SPRINGAPIDIR%
ECHO -----------------------------------------------&echo\Building spring-api...&echo\---------------------&echo\
ECHO -----------------------------------------------&echo\command: mvn clean install -DskipTests&echo\-----------------------------------------------
call mvn clean install -DskipTests
TIMEOUT 3 > NUL

ECHO -----------------------------------------------&echo\Spring Boot projects packaged as JAR files!
ECHO -----------------------------------------------
ECHO JAR files found in projects' target directories.&echo\-----------------------------------------------
PAUSE