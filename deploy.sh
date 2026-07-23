#!/usr/bin/env bash

# Exit immediately if a command fails
set -e

echo "=========================================="
echo "🚀 Building & Deploying to GitHub Pages..."
echo "=========================================="

# Install dependencies if node_modules is missing
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Run the deploy command (builds project and pushes dist to gh-pages branch)
npm run deploy

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your updates will be live on GitHub Pages in 1-2 minutes."
echo "=========================================="
