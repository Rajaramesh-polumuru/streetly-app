#!/bin/bash

# MERN Monorepo Setup Script
# This script helps set up the development environment

set -e

echo "🚀 MERN Monorepo Setup Script"
echo "================================"
echo ""

# Check Node.js version
echo "📋 Checking prerequisites..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 20.x"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "❌ Node.js version must be 20.x or higher (current: $(node -v))"
    exit 1
fi
echo "✅ Node.js $(node -v) detected"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. It should come with Node.js"
    exit 1
fi
echo "✅ npm $(npm -v) detected"

# Check Docker (optional)
if command -v docker &> /dev/null; then
    echo "✅ Docker $(docker -v | cut -d' ' -f3 | cut -d',' -f1) detected"
else
    echo "⚠️  Docker not found (optional, needed for containerized development)"
fi

echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "⚙️  Setting up environment files..."

# Setup API environment
if [ ! -f "apps/api/.env" ]; then
    cp apps/api/.env.example apps/api/.env
    echo "✅ Created apps/api/.env"
    echo "⚠️  Please update the environment variables in apps/api/.env"
else
    echo "ℹ️  apps/api/.env already exists"
fi

# Setup Web environment
if [ ! -f "apps/web/.env.local" ]; then
    cp apps/web/.env.example apps/web/.env.local
    echo "✅ Created apps/web/.env.local"
else
    echo "ℹ️  apps/web/.env.local already exists"
fi

echo ""
echo "🔧 Setting up Git hooks..."
npm run prepare || true

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Update environment variables in apps/api/.env"
echo "   2. Make sure MongoDB is running (or use Docker Compose)"
echo "   3. Run 'npm run dev' to start development servers"
echo "   4. Or run 'npm run docker:up' to start with Docker Compose"
echo ""
echo "🌐 Access points:"
echo "   - Frontend: http://localhost:3000"
echo "   - Backend:  http://localhost:5000"
echo "   - Health:   http://localhost:5000/health"
echo ""
echo "📚 Useful commands:"
echo "   npm run dev           - Start all development servers"
echo "   npm run build         - Build all applications"
echo "   npm test              - Run all tests"
echo "   npm run lint          - Lint all code"
echo "   npm run docker:up     - Start Docker containers"
echo ""
echo "Happy coding! 🎉"

