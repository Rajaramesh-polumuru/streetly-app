# MERN Monorepo Starter 🚀

> Production-ready, scalable MERN stack monorepo with TypeScript, Turborepo, and industry best practices.

[![CI](https://github.com/Rajaramesh-polumuru/streetly-app/actions/workflows/ci.yml/badge.svg)](https://github.com/Rajaramesh-polumuru/streetly-app/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

### 🏗️ **Architecture**
- **Monorepo Management**: Turborepo for optimal caching and parallel execution
- **Package Manager**: npm with workspaces for efficient dependency management
- **TypeScript**: Strict mode enabled with shared configurations
- **Layered Architecture**: Clean separation of concerns (Controller → Service → Repository → Model)

### 🎨 **Frontend** (Next.js 14)
- App Router with React Server Components
- TailwindCSS for styling
- shadcn/ui component library
- Zustand for client state management
- TanStack Query for server state
- React Hook Form + Zod validation
- Axios with interceptors

### 🔧 **Backend** (Express + TypeScript)
- RESTful API with Express
- MongoDB with Mongoose ODM
- JWT authentication with refresh tokens
- Zod validation (shared with frontend)
- Rate limiting and security headers
- Comprehensive error handling
- OpenAPI documentation ready

### 📦 **Shared Packages**
- `@repo/types`: Shared TypeScript types and Zod schemas
- `@repo/ui`: Reusable React components
- `@repo/utils`: Framework-agnostic utilities
- `@repo/eslint-config`: Centralized ESLint configurations
- `@repo/typescript-config`: Base TypeScript configurations

### 🐳 **DevOps**
- Multi-stage Docker builds for optimization
- Docker Compose for local development
- GitHub Actions CI/CD pipeline
- Husky for Git hooks
- Commitlint for conventional commits

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v20.x LTS ([Download](https://nodejs.org/)) - includes npm
- **Docker & Docker Compose**: For containerized development ([Download](https://www.docker.com/))
- **MongoDB**: For local development (or use Docker Compose)

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/Rajaramesh-polumuru/streetly-app.git
cd streetly-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
# API
cp apps/api/.env.example apps/api/.env

# Web
cp apps/web/.env.example apps/web/.env.local
```

**Important**: Update the environment variables in the `.env` files, especially:
- MongoDB connection string
- JWT secrets (generate strong secrets for production)
- CORS origin

### 4. Start development servers

#### Option A: Using Docker Compose (Recommended)

```bash
npm run docker:up
```

This will start:
- MongoDB on port `27017`
- API on port `5000`
- Web on port `3000`

#### Option B: Manual setup

Make sure MongoDB is running, then:

```bash
# Start all apps in development mode
npm run dev

# Or start individually
npm run dev --workspace=api
npm run dev --workspace=web
```

### 5. Access the applications

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/health

## 📁 Project Structure

```
mern-monorepo/
├── .github/                  # GitHub Actions workflows
├── apps/
│   ├── web/                 # Next.js 14 frontend
│   │   ├── src/
│   │   │   ├── app/        # App Router pages
│   │   │   ├── components/ # React components
│   │   │   ├── hooks/      # Custom React hooks
│   │   │   ├── lib/        # Utilities and clients
│   │   │   └── stores/     # Zustand stores
│   │   └── tests/          # Frontend tests
│   └── api/                # Express backend
│       ├── src/
│       │   ├── config/     # Configuration files
│       │   ├── common/     # Shared utilities
│       │   └── modules/    # Feature modules
│       └── tests/          # Backend tests
├── packages/               # Shared packages
│   ├── types/             # Shared TypeScript types
│   ├── ui/                # Shared React components
│   ├── utils/             # Shared utilities
│   ├── eslint-config/     # ESLint configurations
│   └── typescript-config/ # TypeScript configurations
├── docker/                # Docker configurations
├── scripts/               # Utility scripts
└── turbo.json            # Turborepo configuration
```

## 🛠️ Available Scripts

### Root Level

```bash
npm run dev              # Start all apps in development mode
npm run build            # Build all apps and packages
npm run lint             # Lint all apps and packages
npm run type-check       # Type check all TypeScript
npm test                 # Run all tests
npm run format           # Format code with Prettier
npm run docker:up        # Start Docker containers
npm run docker:down      # Stop Docker containers
```

### API (apps/api)

```bash
npm run dev --workspace=api          # Start dev server
npm run build --workspace=api        # Build for production
npm run start --workspace=api        # Start production server
npm test --workspace=api             # Run tests
npm run lint --workspace=api         # Lint code
```

### Web (apps/web)

```bash
npm run dev --workspace=web          # Start dev server
npm run build --workspace=web        # Build for production
npm run start --workspace=web        # Start production server
npm test --workspace=web             # Run tests
npm run lint --workspace=web         # Lint code
```

## 🔐 API Endpoints

### Authentication

- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/refresh` - Refresh access token
- `POST /api/v1/auth/logout` - Logout user

### Users

- `GET /api/v1/users` - Get all users (Admin only)
- `GET /api/v1/users/:id` - Get user by ID
- `GET /api/v1/users/me` - Get current user
- `POST /api/v1/users` - Create user
- `PATCH /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user (Admin only)

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage

# Run E2E tests (Playwright)
cd apps/web
npx playwright test
```

## 🏗️ Building for Production

```bash
# Build all apps
npm run build

# Build specific app
npm run build --workspace=api
npm run build --workspace=web
```

## 🐳 Docker Deployment

### Build images

```bash
docker-compose -f docker/docker-compose.yml build
```

### Run containers

```bash
docker-compose -f docker/docker-compose.yml up -d
```

### Stop containers

```bash
docker-compose -f docker/docker-compose.yml down
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `build`

## 📝 Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Extended from recommended configs
- **Prettier**: Consistent formatting
- **Import Order**: Organized with eslint-plugin-import

## 🔒 Security

- JWT with refresh token rotation
- Helmet.js for security headers
- Rate limiting on API routes
- Input validation with Zod
- CORS configuration
- MongoDB injection prevention

## 🚦 Performance

- Turborepo caching for fast builds
- Next.js App Router with React Server Components
- Image optimization with next/image
- Font optimization with next/font
- MongoDB indexing
- API response caching ready

## 📊 Monitoring (Placeholders for Production)

- **Logging**: Winston/Pino integration points
- **Error Tracking**: Sentry setup guide
- **APM**: New Relic/Datadog integration points
- **Health Checks**: Built-in `/health` endpoint

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Express](https://expressjs.com/)
- [Turborepo](https://turbo.build/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TanStack Query](https://tanstack.com/query/)
- [Zustand](https://zustand-demo.pmnd.rs/)

## 📮 Support

If you have any questions or need help, please open an issue or reach out to the maintainers.

---

**Built with ❤️ using MERN Stack**
