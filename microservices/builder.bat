@ECHO OFF
ECHO Building Spring Boot .jar file...

SET AUTHDIR="Authenticator"
SET SCHEDULERDIR="scheduler"
SET SPRINGAPIDIR="spring-api"

cd .\microservices\%AUTHDIR%

ECHO Building Authenticator...&echo\---------------------&echo\

ECHO -----------------------------------------------&echo\command: mvn clean install -DskipTests&echo\-----------------------------------------------
call mvn clean install -DskipTests
IF %errorlevel% NEQ 0 exit /b %errorlevel%
TIMEOUT 3 > NUL

cd ..\%SCHEDULERDIR%
ECHO -----------------------------------------------&echo\Building scheduler...&echo\---------------------&echo\
ECHO -----------------------------------------------&echo\command: mvn clean install -DskipTests&echo\-----------------------------------------------
call mvn clean install -DskipTests
IF %errorlevel% NEQ 0 exit /b %errorlevel%
TIMEOUT 3 > NUL

cd ..\%SPRINGAPIDIR%
ECHO -----------------------------------------------&echo\Building spring-api...&echo\---------------------&echo\
ECHO -----------------------------------------------&echo\command: mvn clean install -DskipTests&echo\-----------------------------------------------
call mvn clean install -DskipTests
IF %errorlevel% NEQ 0 exit /b %errorlevel%
TIMEOUT 3 > NUL

ECHO -----------------------------------------------&echo\Spring Boot project packaged as JAR file!
ECHO -----------------------------------------------
ECHO JAR file found in the project's target directory.&echo\-----------------------------------------------
PAUSE