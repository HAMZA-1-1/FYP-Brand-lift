@echo off
echo Starting MongoDB Backend Server...
cd server
if not exist .env (
    echo Creating .env file...
    echo MONGODB_URI=mongodb://localhost:27017 > .env
    echo DB_NAME=brandlift >> .env
    echo PORT=3001 >> .env
    echo .env file created!
)
echo.
echo Starting server...
npm start

