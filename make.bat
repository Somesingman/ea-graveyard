@ECHO OFF

SET arg1=%1

if "%1" EQU "build" CALL :Build
if "%1" EQU "setup" CALL :Setup
if "%1" EQU "shell" CALL :Shell
if "%1" EQU "start" CALL :Start
if "%1" EQU "stop" CALL :Stop
if "%1" EQU "restart" CALL :Restart
if "%1" EQU "int-shell" CALL :E2E-shell
if "%1" EQU "int-start" CALL :E2E-start
GOTO :EOF

:: Docker Commands (Windows Makefile)

:: OLD make commands
@REM :Build
@REM docker build -t ea-graveyard:latest .
@REM EXIT /b

@REM :Setup
@REM docker run --rm -it --mount type=bind,src=%cd%/ea-graveyard,target=//app ea-graveyard:latest npm install
@REM EXIT /b

@REM :Shell
@REM docker run --rm -p 8080:8080 -it --mount type=bind,src=%cd%/ea-graveyard,target=//app ea-graveyard:latest /bin/bash
@REM EXIT /b

@REM :E2E
@REM docker run -p 3000:3000 -p 9323:9323 --rm --network host --init -it --workdir /home/pwuser --user pwuser mcr.microsoft.com/playwright:v1.52.0-noble /bin/sh -c "npx -y playwright@1.52.0 run-server --port 3000 --host 0.0.0.0"
@REM EXIT /b

:Build
docker compose build
EXIT /b

:Shell
docker exec -it ea-graveyard-website-1 /bin/bash
EXIT /b

:E2E-shell
docker exec -it ea-graveyard-playwright-1 /bin/bash
EXIT /b

:Start
docker compose up --remove-orphans --detach 
EXIT /b

:Stop
docker compose --profile "*" down --remove-orphans
EXIT /b

:Restart
CALL :Stop
CALL :Start
EXIT /b

:E2E-start
docker compose --profile e2e up --detach
EXIT /b