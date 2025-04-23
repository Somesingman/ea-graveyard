@ECHO OFF

SET arg1=%1

if "%1" EQU "build" CALL :Build
if "%1" EQU "setup" CALL :Setup
if "%1" EQU "shell" CALL :Shell
GOTO :EOF

:: Docker Commands (Windows Makefile)

:Build
docker build -t ea-graveyard:latest .
EXIT /b

:Setup
docker run --rm -it --mount type=bind,src=%cd%,target=//app ea-graveyard:latest npm install
EXIT /b

:Shell
docker run --rm -p 8080:8080 -it --mount type=bind,src=%cd%,target=//app ea-graveyard:latest /bin/bash
EXIT /b