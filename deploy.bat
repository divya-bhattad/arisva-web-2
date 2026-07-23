@echo off
echo ==========================================
echo Building ^& Deploying to GitHub Pages...
echo ==========================================

if not exist node_modules (
    echo Installing dependencies...
    call npm install
)

call npm run deploy

echo.
echo Deployment complete!
echo Your updates will be live on GitHub Pages in 1-2 minutes.
echo ==========================================
