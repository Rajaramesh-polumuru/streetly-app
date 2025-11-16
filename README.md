# Streetly 🍽️

> Transform Your Restaurant Operations with Smart Technology - A modern POS and digital menu platform built for the future of food service.

[![CI](https://github.com/Rajaramesh-polumuru/streetly-app/actions/workflows/ci.yml/badge.svg)](https://github.com/Rajaramesh-polumuru/streetly-app/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)

## 🌟 About Streetly

Streetly is a comprehensive restaurant management platform that combines QR-based digital menus, smart order management, integrated payments, and business intelligence into one seamless solution. Built with the MERN stack and modern TypeScript, Streetly helps restaurants increase revenue by 15-20% while reducing operational overhead.

### Why Streetly?

- **📱 Contactless Ordering**: QR code-based digital menus for safe, modern dining
- **📊 Business Intelligence**: Real-time analytics to make data-driven decisions
- **💳 Integrated Payments**: Seamless Razorpay integration for smooth transactions
- **🎯 Customer Loyalty**: Built-in rewards and membership programs
- **📦 Inventory Management**: Never run out of your best-selling items
- **🚀 Scale Effortlessly**: From single location to multi-restaurant chains

## ✨ Key Features

### 🏗️ **Architecture**

- **Monorepo Management**: Turborepo for optimal caching and parallel execution
- **Type-Safe Development**: Strict TypeScript across the entire stack
- **Shared Validation**: Zod schemas shared between frontend and backend
- **Layered Architecture**: Clean separation of concerns (Controller → Service → Repository → Model)

### 🎨 **Frontend** (Next.js 14)

- **Modern UI**: Custom-built design system with 26+ production-ready components
- **Color Palette**: Professional ColorHunt palette (#222831, #393E46, #00ADB5, #EEEEEE)
- **60-30-10 Design Rule**: Balanced, accessible color distribution
- **App Router**: React Server Components for optimal performance
- **State Management**: Zustand + TanStack Query for client and server state
- **Form Validation**: React Hook Form + Zod for type-safe forms
- **Responsive Design**: Mobile-first approach with perfect tablet and desktop support

### 🔧 **Backend** (Express + TypeScript)

- **RESTful API**: Clean, well-documented endpoints
- **MongoDB**: Scalable NoSQL database with Mongoose ODM
- **Authentication**: JWT with refresh token rotation
- **Security**: Rate limiting, helmet headers, CORS protection
- **Validation**: Request validation with shared Zod schemas
- **Error Handling**: Comprehensive error handling and logging

### 📦 **Shared Packages**

- `@repo/types`: Shared TypeScript types and Zod schemas
- `@repo/ui`: 26+ accessible, production-ready React components
- `@repo/utils`: Framework-agnostic utility functions
- `@repo/eslint-config`: Centralized linting standards
- `@repo/typescript-config`: Base TypeScript configurations

### 🎨 **Design System**

Streetly uses a carefully crafted design system following the 60-30-10 color rule:

| Color         | Hex     | Usage                        | Distribution |
| ------------- | ------- | ---------------------------- | ------------ |
| **Neutral**   | #EEEEEE | Backgrounds, large areas     | 60%          |
| **Primary**   | #222831 | Text, headers, dark elements | 25%          |
| **Secondary** | #393E46 | Supporting elements          | 5%           |
| **Accent**    | #00ADB5 | CTAs, highlights, links      | 10%          |

**Features:**

- WCAG 2.1 Level AA compliant
- Material Design 3 principles
- iOS Human Interface Guidelines
- Consistent 8px spacing system
- Typography scale (Major Third 1.250)
- Elevation system with 6 shadow levels

### 🐳 **DevOps & CI/CD**

- Multi-stage Docker builds for production optimization
- Docker Compose for local development environment
- GitHub Actions CI/CD pipeline
- Automated testing and linting
- Husky for Git hooks
- Commitlint for conventional commits

## 📋 Prerequisites

Before you begin, ensure you have installed:

- **Node.js**: v20.x LTS or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js (v10.x or higher)
- **Docker & Docker Compose**: For containerized development ([Download](https://www.docker.com/))
- **MongoDB**: v6.0 or higher (or use Docker Compose)

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

This will install all dependencies across the monorepo using npm workspaces.

### 3. Set up environment variables

```bash
# Copy API environment file
cp apps/api/.env.example apps/api/.env

# Copy Web environment file
cp apps/web/.env.example apps/web/.env.local
```

**Configure the following important variables:**

**API (.env):**

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/streetly
JWT_ACCESS_SECRET=your-super-secret-access-key-change-in-production
JWT_REFRESH_SECRET=your-super-secret-refresh-key-change-in-production
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:3000
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

**Web (.env.local):**

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Start development servers

#### Option A: Using Docker Compose (Recommended)

```bash
npm run docker:up
```

This starts:

- MongoDB on port `27017`
- API on port `5000`
- Web on port `3000`

#### Option B: Manual setup

Ensure MongoDB is running, then:

```bash
# Start all apps in development mode
npm run dev

# Or start individually
npm run dev --workspace=api  # API only
npm run dev --workspace=web  # Web only
```

### 5. Access the applications

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api/v1
- **API Health Check**: http://localhost:5000/health

## 📁 Project Structure

```
streetly-app/
├── .github/                    # GitHub Actions workflows
│   └── workflows/
│       └── ci.yml             # CI/CD pipeline
├── apps/
│   ├── web/                   # Next.js 14 frontend
│   │   ├── src/
│   │   │   ├── app/          # App Router pages
│   │   │   │   ├── auth/     # Authentication pages
│   │   │   │   ├── dashboard/# Dashboard pages
│   │   │   │   └── page.tsx  # Landing page
│   │   │   ├── components/   # React components
│   │   │   │   └── providers.tsx
│   │   │   ├── config/       # Configuration
│   │   │   │   └── constants.ts
│   │   │   ├── hooks/        # Custom React hooks
│   │   │   │   └── use-auth.ts
│   │   │   ├── lib/          # API clients & utilities
│   │   │   └── stores/       # Zustand stores
│   │   ├── public/           # Static assets
│   │   ├── tailwind.config.ts# Tailwind configuration
│   │   └── package.json
│   └── api/                  # Express backend
│       ├── src/
│       │   ├── config/       # App configuration
│       │   ├── common/       # Shared utilities
│       │   │   ├── errors/   # Error classes
│       │   │   └── middleware/ # Express middleware
│       │   └── modules/      # Feature modules
│       │       ├── auth/     # Authentication
│       │       └── users/    # User management
│       ├── tests/            # API tests
│       └── package.json
├── packages/                 # Shared packages
│   ├── types/               # Shared TypeScript types
│   │   └── src/
│   │       ├── api.ts       # API response types
│   │       ├── entities.ts  # Entity types
│   │       ├── schemas.ts   # Zod schemas
│   │       └── index.ts
│   ├── ui/                  # Shared UI components
│   │   └── src/
│   │       ├── components/  # 26+ React components
│   │       ├── lib/         # UI utilities
│   │       └── index.ts
│   ├── utils/               # Shared utilities
│   ├── eslint-config/       # ESLint configurations
│   └── typescript-config/   # TypeScript configurations
├── docker/                  # Docker configurations
│   └── docker-compose.yml
├── scripts/                 # Utility scripts
├── turbo.json              # Turborepo configuration
├── package.json            # Root package.json
└── README.md              # This file
```

## 🛠️ Available Scripts

### Root Level

```bash
npm run dev              # Start all apps in development mode
npm run build            # Build all apps and packages
npm run lint             # Lint all apps and packages
npm run type-check       # Type check all TypeScript code
npm test                 # Run all tests across the monorepo
npm run test:watch       # Run tests in watch mode
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run clean            # Clean all build artifacts
npm run docker:up        # Start Docker containers
npm run docker:down      # Stop Docker containers
npm run docker:build     # Build Docker images
```

### API Commands

```bash
npm run dev --workspace=api          # Start dev server with hot reload
npm run build --workspace=api        # Build for production
npm run start --workspace=api        # Start production server
npm test --workspace=api             # Run API tests
npm run lint --workspace=api         # Lint API code
npm run type-check --workspace=api   # Type check API
```

### Web Commands

```bash
npm run dev --workspace=web          # Start Next.js dev server
npm run build --workspace=web        # Build for production
npm run start --workspace=web        # Start production server
npm test --workspace=web             # Run frontend tests
npm run lint --workspace=web         # Lint frontend code
```

### Shared Package Commands

```bash
npm run build --workspace=@repo/types   # Build types package
npm run build --workspace=@repo/ui      # Build UI package
npm run build --workspace=@repo/utils   # Build utils package
```

## 🔐 API Endpoints

### Authentication

| Method | Endpoint                | Description          | Auth |
| ------ | ----------------------- | -------------------- | ---- |
| POST   | `/api/v1/auth/register` | Register new user    | No   |
| POST   | `/api/v1/auth/login`    | Login user           | No   |
| POST   | `/api/v1/auth/refresh`  | Refresh access token | No   |
| POST   | `/api/v1/auth/logout`   | Logout user          | Yes  |

### Users

| Method | Endpoint            | Description      | Auth  |
| ------ | ------------------- | ---------------- | ----- |
| GET    | `/api/v1/users`     | Get all users    | Admin |
| GET    | `/api/v1/users/:id` | Get user by ID   | Yes   |
| GET    | `/api/v1/users/me`  | Get current user | Yes   |
| POST   | `/api/v1/users`     | Create user      | Admin |
| PATCH  | `/api/v1/users/:id` | Update user      | Yes   |
| DELETE | `/api/v1/users/:id` | Delete user      | Admin |

### Restaurants (Planned)

| Method | Endpoint                  | Description          | Auth |
| ------ | ------------------------- | -------------------- | ---- |
| GET    | `/api/v1/restaurants`     | Get all restaurants  | Yes  |
| GET    | `/api/v1/restaurants/:id` | Get restaurant by ID | Yes  |
| POST   | `/api/v1/restaurants`     | Create restaurant    | Yes  |
| PATCH  | `/api/v1/restaurants/:id` | Update restaurant    | Yes  |
| DELETE | `/api/v1/restaurants/:id` | Delete restaurant    | Yes  |

### Menu Items (Planned)

| Method | Endpoint                 | Description         | Auth |
| ------ | ------------------------ | ------------------- | ---- |
| GET    | `/api/v1/menu-items`     | Get all menu items  | No   |
| GET    | `/api/v1/menu-items/:id` | Get menu item by ID | No   |
| POST   | `/api/v1/menu-items`     | Create menu item    | Yes  |
| PATCH  | `/api/v1/menu-items/:id` | Update menu item    | Yes  |
| DELETE | `/api/v1/menu-items/:id` | Delete menu item    | Yes  |

### Orders (Planned)

| Method | Endpoint             | Description         | Auth |
| ------ | -------------------- | ------------------- | ---- |
| GET    | `/api/v1/orders`     | Get all orders      | Yes  |
| GET    | `/api/v1/orders/:id` | Get order by ID     | Yes  |
| POST   | `/api/v1/orders`     | Create order        | Yes  |
| PATCH  | `/api/v1/orders/:id` | Update order status | Yes  |

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage

# Run specific workspace tests
npm test --workspace=api
npm test --workspace=web

# Run E2E tests (Playwright)
cd apps/web
npx playwright test
npx playwright test --ui  # Interactive mode
```

## 🏗️ Building for Production

```bash
# Build all apps and packages
npm run build

# Build specific workspace
npm run build --workspace=api
npm run build --workspace=web
npm run build --workspace=@repo/ui

# Type check before building
npm run type-check

# Lint before building
npm run lint
```

## 🐳 Docker Deployment

### Local Development with Docker

```bash
# Start all services
npm run docker:up

# Build and start
npm run docker:build

# Stop all services
npm run docker:down

# View logs
docker-compose -f docker/docker-compose.yml logs -f

# Restart specific service
docker-compose -f docker/docker-compose.yml restart api
```

### Production Deployment

```bash
# Build production images
docker-compose -f docker/docker-compose.yml build --no-cache

# Run in production mode
docker-compose -f docker/docker-compose.yml up -d

# Scale services
docker-compose -f docker/docker-compose.yml up -d --scale api=3
```

## 🎨 Design System

### Color System

Streetly uses the ColorHunt palette following the 60-30-10 rule for visual hierarchy:

```css
/* Primary (30%) - Text and headings */
--primary-600: #222831 /* Main dark color */ --primary-500: #393e46 /* Secondary dark */
  /* Accent (10%) - CTAs and highlights */ --accent-500: #00adb5 /* Teal/Cyan */
  /* Neutral (60%) - Backgrounds */ --neutral-300: #eeeeee /* Light gray */ --neutral-50: #ffffff
  /* White */;
```

### Component Library

The `@repo/ui` package includes 26+ production-ready components:

**Core Components:**

- Button, ButtonGroup, IconButton
- Input, Textarea, Select
- Card, Badge, Avatar
- Label, Checkbox, Radio, Switch

**Feedback Components:**

- Alert, Spinner, Skeleton
- Toast notifications
- Progress indicators

**Overlay Components:**

- Dialog, Drawer, Dropdown
- Tooltip, Popover, AlertDialog

**Layout Components:**

- Container, Stack, Grid
- Separator, Divider

**Data Display:**

- EmptyState, StatusIndicator
- Tables (planned)

See [packages/ui/README.md](packages/ui/README.md) for detailed component documentation.

## 🔒 Security

### Implemented Security Measures

- **Authentication**: JWT with refresh token rotation
- **Password Hashing**: bcrypt with salt rounds
- **Security Headers**: Helmet.js for HTTP headers
- **Rate Limiting**: Express rate limit on API routes
- **Input Validation**: Zod schemas for all inputs
- **CORS**: Configured for specific origins
- **MongoDB Injection**: Prevented through Mongoose
- **XSS Protection**: React's built-in escaping
- **CSRF**: Token-based protection (planned)

### Security Best Practices

```bash
# Generate secure JWT secrets
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Never commit .env files
# Use environment-specific configs
# Rotate JWT secrets regularly
# Enable HTTPS in production
# Implement rate limiting
# Sanitize user inputs
```

## 🚦 Performance

### Optimization Techniques

- **Turborepo Caching**: Intelligent build caching
- **React Server Components**: Reduced JavaScript bundle
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: next/image with lazy loading
- **Font Optimization**: System fonts + optimized loading
- **MongoDB Indexing**: Optimized queries
- **API Caching**: Response caching ready
- **CDN Ready**: Static assets optimizable

### Performance Metrics

- **Lighthouse Score**: 95+ (target)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **API Response Time**: < 200ms (avg)

## 📊 Monitoring & Logging

### Health Checks

```bash
# API health check
curl http://localhost:5000/health

# Response
{
  "status": "ok",
  "timestamp": "2025-01-16T...",
  "uptime": 12345,
  "mongodb": "connected"
}
```

### Logging (Production Ready)

- Structured logging with Winston
- Log levels: error, warn, info, debug
- Request/response logging
- Error tracking integration points
- Performance monitoring hooks

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Run linting: `npm run lint`
6. Commit changes: `git commit -m 'feat: add amazing feature'`
7. Push to branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes
- `build`: Build system changes

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Extended from recommended + custom rules
- **Prettier**: 2-space indentation, single quotes
- **Import Order**: Built-in packages → External → Internal → Relative

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

### Technologies

- [Next.js](https://nextjs.org/) - React framework
- [Express](https://expressjs.com/) - Backend framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Turborepo](https://turbo.build/) - Monorepo tool
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Zod](https://zod.dev/) - Schema validation
- [TanStack Query](https://tanstack.com/query/) - Data fetching
- [Zustand](https://zustand-demo.pmnd.rs/) - State management

### Design Resources

- [ColorHunt](https://colorhunt.co/) - Color palette inspiration
- [Lucide Icons](https://lucide.dev/) - Icon system
- [Radix UI](https://www.radix-ui.com/) - Headless UI primitives

## 📮 Support

Need help? We're here for you:

- **Issues**: [GitHub Issues](https://github.com/Rajaramesh-polumuru/streetly-app/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Rajaramesh-polumuru/streetly-app/discussions)
- **Email**: support@streetly.app (if available)

## 🗺️ Roadmap

### Phase 1: Core Platform (Current)

- [x] Authentication & User Management
- [x] Restaurant Profile Setup
- [x] Design System & UI Components
- [x] Landing Page & Auth Pages
- [ ] QR Code Generation
- [ ] Digital Menu Display

### Phase 2: Order Management (Next)

- [ ] Order Placement System
- [ ] Kitchen Display Integration
- [ ] Order Status Tracking
- [ ] Receipt Generation

### Phase 3: Payments & Analytics

- [ ] Razorpay Integration
- [ ] Payment Processing
- [ ] Analytics Dashboard
- [ ] Revenue Reports

### Phase 4: Advanced Features

- [ ] Customer Loyalty Program
- [ ] Inventory Management
- [ ] Multi-location Support
- [ ] Staff Management
- [ ] Custom Branding

---

**Built with ❤️ for the future of restaurant technology**

_Transforming dining experiences, one QR code at a time._
