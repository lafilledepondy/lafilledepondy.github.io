@echo off
setlocal

:: Exit on error
set ERRLEV=0
set "PUBLIC_URL=https://lafilledepondy.github.io/"
npm run build || set ERRLEV=1

if %ERRLEV% NEQ 0 (
    echo "Build failed. Exiting..."
    exit /b %ERRLEV%
)

cd build

git init
git add -A
git commit -m "deploy"

git push -f git@github.com:lafilledepondy/lafilledepondy.github.io.git main
