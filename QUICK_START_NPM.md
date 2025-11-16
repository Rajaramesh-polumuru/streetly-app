# 🚀 Quick Start Guide - npm Edition

## Initial Setup (First Time)

```bash
# 1. Install dependencies
npm install

# 2. Run setup script
bash scripts/setup.sh

# 3. Update environment variables
# Edit apps/api/.env with your MongoDB URI and JWT secrets

# 4. Start development
npm run dev
```

## Daily Development Commands

### Start Development Servers

```bash
# All apps
npm run dev

# API only
npm run dev --workspace=api

# Web only  
npm run dev --workspace=web
```

### Build for Production

```bash
# All apps
npm run build

# Specific app
npm run build --workspace=api
npm run build --workspace=web
```

### Testing

```bash
# All tests
npm test

# Watch mode
npm run test:watch

# Coverage
npm test -- --coverage

# E2E tests
cd apps/web && npx playwright test
```

### Code Quality

```bash
# Lint
npm run lint

# Type check
npm run type-check

# Format
npm run format

# Check formatting
npm run format:check
```

### Docker

```bash
# Start all services (MongoDB + API + Web)
npm run docker:up

# Stop all services
npm run docker:down

# Rebuild images
npm run docker:build
```

## Workspace Commands

npm workspaces syntax:

```bash
npm run <script> --workspace=<workspace-name>
```

Examples:

```bash
npm run dev --workspace=api
npm run build --workspace=web
npm test --workspace=api
npm run lint --workspace=web
```

## Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health**: http://localhost:5000/health
- **MongoDB**: mongodb://localhost:27017

## Environment Setup

### apps/api/.env

```bash
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern_dev
JWT_SECRET=<generate-with-openssl-rand-base64-32>
JWT_REFRESH_SECRET=<generate-with-openssl-rand-base64-32>
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:3000
```

### apps/web/.env.local

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```

## Generate JWT Secrets

```bash
openssl rand -base64 32
```

## Troubleshooting

### Clear everything and reinstall

```bash
rm -rf node_modules package-lock.json
npm install
```

### Port already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### MongoDB connection issues

```bash
# Check if MongoDB is running
mongosh

# Or start with Docker
npm run docker:up
```

## Git Workflow

```bash
# Create feature branch
git checkout -b feat/your-feature

# Make changes...

# Pre-commit hooks will automatically run:
# - ESLint
# - Prettier  
# - Commitlint

# Commit with conventional commits format
git commit -m "feat(api): add new endpoint"

# Push and create PR
git push origin feat/your-feature
```

## Commit Message Format

```
<type>(<scope>): <subject>

Types: feat, fix, docs, style, refactor, test, chore
Scopes: api, web, types, ui, docs
```

Examples:
- `feat(api): add user authentication`
- `fix(web): resolve login form validation`
- `docs(readme): update installation steps`
- `refactor(api): simplify error handling`

## Need Help?

- 📖 [Full README](./README.md)
- 🤝 [Contributing Guide](./CONTRIBUTING.md)
- 📝 [Setup Guide](./SETUP_GUIDE.md)
- 🔄 [npm Migration Notes](./MIGRATION_NOTES.md)
- ✅ [npm Conversion Summary](./NPM_CONVERSION_SUMMARY.md)

---

**Ready to build! 🎉**

