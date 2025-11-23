# Contributing to MERN Monorepo

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Project Structure](#project-structure)

## 🤝 Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inclusive environment. Please be respectful and considerate in all interactions.

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x
- npm run 8.x
- Docker & Docker Compose
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/mern-monorepo.git
   cd mern-monorepo
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   ```bash
   cp apps/api/.env.example apps/api/.env
   cp apps/web/.env.example apps/web/.env.local
   ```
5. Start development:
   ```bash
   npm run dev
   ```

## 💻 Development Workflow

### Branch Naming Convention

Use the following format for branch names:

- `feat/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation changes
- `refactor/description` - Code refactoring
- `test/description` - Adding or updating tests
- `chore/description` - Maintenance tasks

Examples:

- `feat/add-user-profile`
- `fix/login-validation`
- `docs/update-readme`

### Development Process

1. Create a new branch from `main`:

   ```bash
   git checkout -b feat/your-feature-name
   ```

2. Make your changes

3. Run tests and linting:

   ```bash
   npm run lint
   npm run type-check
   npm test
   ```

4. Commit your changes (see [Commit Guidelines](#commit-guidelines))

5. Push to your fork:

   ```bash
   git push origin feat/your-feature-name
   ```

6. Create a Pull Request

## 📏 Coding Standards

### TypeScript

- Use TypeScript strict mode
- Prefer `interface` over `type` for object types
- Use explicit return types for functions
- Avoid `any` type - use `unknown` if type is truly unknown
- Use `type` for unions, intersections, and mapped types

### React/Next.js

- Use functional components with hooks
- Prefer Server Components by default
- Use Client Components only when necessary
- Follow the Next.js App Router conventions
- Keep components small and focused

### Express/Backend

- Follow the layered architecture (Controller → Service → Repository → Model)
- Use dependency injection patterns
- Keep business logic in services
- Use repositories for data access
- Controllers should be thin

### File Organization

- One component per file
- Co-locate related files
- Use index files for cleaner imports
- Group by feature, not by type

### Naming Conventions

- **Files**: `kebab-case.ts` or `kebab-case.tsx`
- **Components**: `PascalCase`
- **Functions/Variables**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Types/Interfaces**: `PascalCase`
- **Enums**: `PascalCase`

### Code Style

- Use Prettier for formatting (configured in `.prettierrc.js`)
- Follow ESLint rules (configured in `packages/eslint-config`)
- Max line length: 100 characters
- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in multi-line objects/arrays

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes
- `build`: Build system changes

### Scope

Optional, specifies the affected area:

- `api`: Backend API
- `web`: Frontend application
- `types`: Shared types package
- `ui`: UI components package
- `docs`: Documentation

### Examples

```bash
feat(api): add user profile endpoint
fix(web): resolve login form validation issue
docs(readme): update installation instructions
refactor(api): simplify error handling middleware
test(api): add unit tests for user service
chore(deps): update dependencies
```

### Writing Good Commits

- Use imperative mood ("add" not "added")
- Capitalize the first letter
- No period at the end
- Keep subject line under 72 characters
- Reference issues/PRs in the footer: `Closes #123`

## 🔄 Pull Request Process

### Before Submitting

1. ✅ Code follows the style guidelines
2. ✅ Self-review completed
3. ✅ Comments added for complex logic
4. ✅ Documentation updated
5. ✅ No new warnings
6. ✅ Tests added/updated
7. ✅ All tests passing
8. ✅ Type checking passing
9. ✅ Linting passing

### PR Title

Follow the same convention as commits:

```
<type>(<scope>): <description>
```

### PR Description

Use the provided template and include:

- Summary of changes
- Motivation and context
- Type of change
- How it was tested
- Screenshots (if applicable)
- Related issues

### Review Process

1. Automated checks must pass (CI)
2. At least one approval required
3. No unresolved conversations
4. Branch must be up to date with main

### Merging

- Use "Squash and merge" for feature branches
- Use "Rebase and merge" for hotfixes
- Delete branch after merging

## 📂 Project Structure

### Adding a New Feature

#### Backend (API)

1. Create a new module in `apps/api/src/modules/`:

   ```
   feature-name/
   ├── feature-name.model.ts       # Mongoose model
   ├── feature-name.repository.ts  # Data access
   ├── feature-name.service.ts     # Business logic
   ├── feature-name.controller.ts  # HTTP handlers
   └── feature-name.routes.ts      # Route definitions
   ```

2. Register routes in `apps/api/src/app.ts`

3. Add types to `packages/types/src/`

#### Frontend (Web)

1. Create components in `apps/web/src/components/`
2. Add pages in `apps/web/src/app/`
3. Create hooks in `apps/web/src/hooks/`
4. Add stores in `apps/web/src/stores/` (if needed)

### Adding a Shared Package

1. Create package in `packages/your-package/`
2. Add `package.json` with workspace dependencies
3. Export from `src/index.ts`
4. Update `npm workspaces (package.json)` if needed

## 🧪 Testing Guidelines

### Unit Tests

- Test business logic thoroughly
- Mock external dependencies
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

### Integration Tests

- Test API endpoints
- Test database operations
- Use test database

### E2E Tests

- Test critical user flows
- Use Playwright for frontend
- Keep tests maintainable

## 🐛 Reporting Bugs

When reporting bugs, include:

1. Description of the issue
2. Steps to reproduce
3. Expected behavior
4. Actual behavior
5. Screenshots/logs
6. Environment details

## 💡 Suggesting Features

When suggesting features, include:

1. Clear description
2. Use case/motivation
3. Proposed solution
4. Alternative solutions considered
5. Additional context

## 📚 Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Express Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Turborepo Documentation](https://turbo.build/repo/docs)

## ❓ Questions?

If you have questions, please:

1. Check existing issues
2. Read the documentation
3. Open a new issue with the `question` label

---

Thank you for contributing! 🎉
