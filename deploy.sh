#!/bin/bash

# Quick Deployment Script for Keymaster Website
# This script helps deploy the website to any server

echo "🚀 Keymaster Website Deployment Script"
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create environment file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating environment file..."
    cat > .env.local << EOL
# Database
DATABASE_URL="file:./dev.db"

# Next.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="$(openssl rand -base64 32)"

# Production
NODE_ENV=production
PORT=3000
EOL
    echo "✅ Environment file created. Please update with your settings."
fi

# Initialize database
echo "🗄️ Initializing database..."
npm run db:push

# Build the application
echo "🔨 Building application..."
npm run build

echo "✅ Build completed successfully!"
echo ""
echo "🎯 Next Steps:"
echo "1. Update .env.local with your specific settings"
echo "2. Run 'npm start' to start the production server"
echo "3. Set up reverse proxy (nginx) for production"
echo "4. Configure SSL certificate"
echo ""
echo "📚 For detailed deployment instructions, see DEPLOYMENT.md"
echo ""
echo "🌐 To start the application now:"
echo "   npm start"