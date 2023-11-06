#!/bin/bash

echo "Building React app..."
sleep 3

# Assuming your React app's source code is in the 'react-app' directory
cd ./react-app

echo "Installing dependencies..."
npm install

echo "Building production-ready React app..."
echo "---------------------"
echo "command: npm run build"
npm run build

echo "React app build completed!"
echo "Build artifacts found in the 'build' directory."
read -p "Press Enter to exit."
