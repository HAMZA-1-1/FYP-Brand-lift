#!/bin/bash
echo "Starting MongoDB Backend Server..."
cd server

if [ ! -f .env ]; then
    echo "Creating .env file..."
    cat > .env << EOF
MONGODB_URI=mongodb://localhost:27017
DB_NAME=brandlift
PORT=3001
EOF
    echo ".env file created!"
fi

echo ""
echo "Starting server..."
npm start

