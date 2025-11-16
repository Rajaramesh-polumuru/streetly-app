# 🚀 Quick Setup Guide

This guide will help you get the MERN Monorepo up and running in minutes.

## Prerequisites Checklist

Before you begin, ensure you have:

- ✅ **Node.js 20.x** installed ([Download](https://nodejs.org/))
- ✅ **npm run 8.x** installed (Run: `npm install -g pnpm@8`)
- ✅ **MongoDB** running locally or access to MongoDB Atlas
- ✅ **Docker Desktop** (optional, for containerized development)
- ✅ **Git** installed

## Quick Start (5 minutes)

### Option 1: Automated Setup Script

```bash
# Clone the repository
git clone <your-repo-url>
cd mern-monorepo

# Run automated setup
bash scripts/setup.sh

# Update environment variables
# Edit apps/api/.env and set:
# - MONGODB_URI (your MongoDB connection string)
# - JWT_SECRET (generate with: openssl rand -base64 32)
# - JWT_REFRESH_SECRET (generate with: openssl rand -base64 32)

# Start development
npm run dev
```

### Option 2: Docker Compose (Recommended)

```bash
# Clone and navigate
git clone <your-repo-url>
cd mern-monorepo

# Install dependencies
npm install

# Start everything with Docker
npm run docker:up
```

This will start:
- ✅ MongoDB on `localhost:27017`
- ✅ API on `localhost:5000`
- ✅ Web on `localhost:3000`

### Option 3: Manual Setup

```bash
# 1. Clone repository
git clone <your-repo-url>
cd mern-monorepo

# 2. Install dependencies
npm install

# 3. Setup environment files
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local

# 4. Update apps/api/.env with your MongoDB URI and secrets

# 5. Start MongoDB (if not using Docker)
mongod

# 6. Start development servers
npm run dev
```

## Environment Variables

### Required for API (`apps/api/.env`)

```bash
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern_dev
JWT_SECRET=<generate-32-char-secret>
JWT_REFRESH_SECRET=<generate-32-char-secret>
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:3000
```

**Generate secure secrets:**
```bash
openssl rand -base64 32
```

### Required for Web (`apps/web/.env.local`)

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```

## Verification Steps

After setup, verify everything works:

### 1. Check API Health
```bash
curl http://localhost:5000/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 10.5,
  "environment": "development"
}
```

### 2. Check Frontend
Open browser: http://localhost:3000

You should see the landing page.

### 3. Test API Endpoint
```bash
curl http://localhost:5000/api/v1/users
```

### 4. Run Tests
```bash
npm test
```

### 5. Run Linting
```bash
npm run lint
```

### 6. Run Type Check
```bash
npm run type-check
```

## Common Issues & Solutions

### Issue: MongoDB Connection Failed

**Solution:**
1. Ensure MongoDB is running: `mongod --version`
2. Check connection string in `apps/api/.env`
3. For Docker: Ensure containers are running: `docker ps`

### Issue: Port Already in Use

**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### Issue: npm install fails

**Solution:**
```bash
# Clear npm run cache
npm run store prune

# Remove lock file and try again
rm package-lock.json
npm install
```

### Issue: TypeScript errors

**Solution:**
```bash
# Build shared packages first
npm run --workspace= @repo/types build
npm run --workspace= @repo/utils build

# Then check types
npm run type-check
```

## Development Workflow

### Running Individual Apps

```bash
# API only
npm run --workspace= api dev

# Web only
npm run --workspace= web dev
```

### Building for Production

```bash
# Build all
npm run build

# Build specific app
npm run --workspace= api build
npm run --workspace= web build
```

### Running Tests

```bash
# All tests
npm test

# Watch mode
npm test:watch

# Specific app
npm run --workspace= api test
npm run --workspace= web test
```

## Next Steps

1. ✅ **Create your first user:**
   - Navigate to http://localhost:3000/auth/login
   - Use the registration flow (to be implemented) or create via API:
   ```bash
   curl -X POST http://localhost:5000/api/v1/users \
     -H "Content-Type: application/json" \
     -d '{
       "email": "test@example.com",
       "password": "Test1234",
       "name": "Test User"
     }'
   ```

2. ✅ **Explore the API:**
   - Health: http://localhost:5000/health
   - Users endpoint: http://localhost:5000/api/v1/users
   - Auth endpoints: http://localhost:5000/api/v1/auth/*

3. ✅ **Start building features:**
   - Read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines
   - Check [README.md](./README.md) for architecture details
   - Browse the codebase to understand the structure

## Useful Commands Reference

```bash
# Development
npm run dev                    # Start all apps
npm run dev --filter web       # Start web only
npm run dev --filter api       # Start API only

# Building
npm run build                  # Build all
npm run clean                  # Clean build artifacts

# Testing
npm test                   # Run all tests
npm test:watch            # Watch mode
npm run lint                  # Lint all code
npm run type-check           # Type check all

# Formatting
npm run format                # Format all files
npm run format:check          # Check formatting

# Docker
npm run docker:up             # Start containers
npm run docker:down           # Stop containers
npm run docker:build          # Build images

# Database (with Docker)
docker exec -it mern-mongo mongosh
```

## Resources

- 📚 [Full Documentation](./README.md)
- 🤝 [Contributing Guide](./CONTRIBUTING.md)
- 📝 [Changelog](./CHANGELOG.md)
- 🐛 [Issue Tracker](https://github.com/yourusername/mern-monorepo/issues)

## Need Help?

- Check existing issues on GitHub
- Read the documentation
- Ask questions in discussions
- Contact maintainers

---

**Happy Coding! 🎉**

