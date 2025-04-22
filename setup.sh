#!/bin/sh

echo "===== StyleHub E-Commerce Setup ====="
echo "This script will guide you through setting up the project."
echo

# Check if Node.js is installed
if command -v node > /dev/null 2>&1; then
  echo "✅ Node.js is installed"
  node -v
else
  echo "❌ Node.js is not installed"
  echo "Please install Node.js from https://nodejs.org/"
  echo "Recommended version: 16.x or later"
fi

# Check if npm is installed
if command -v npm > /dev/null 2>&1; then
  echo "✅ npm is installed"
  npm -v
else
  echo "❌ npm is not installed"
  echo "npm should be included with your Node.js installation"
fi

echo
echo "To start the development server once Node.js is installed:"
echo "1. Run: npm install"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000 in your browser"
echo
echo "Thank you for using StyleHub E-Commerce template!" 