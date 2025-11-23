# 🎨 Streetly: Complete Design System, UI Library & Landing Pages

This PR transforms the MERN monorepo into **Streetly**, a production-ready B2B SaaS platform for restaurants with a complete design system, comprehensive UI component library, and professional landing/authentication pages.

---

## 📦 What's Included

### 1. **Complete Design System**

#### Tailwind Configuration (`apps/web/tailwind.config.ts`)

- ✅ **60-30-10 Color Palette** following Material Design 3
  - Primary (#222831) - 60% usage
  - Secondary (#393E46) - 30% usage
  - Accent (#10B981 - Green) - 10% usage for CTAs
  - Neutral (#EEEEEE) - backgrounds
- ✅ Typography scale with Major Third ratio (1.250)
- ✅ Spacing system (4px base unit)
- ✅ Elevation system with Material Design 3 shadows
- ✅ Animation keyframes (fadeIn, slideUp, slideDown, scaleIn)
- ✅ Installed plugins: @tailwindcss/forms, @tailwindcss/typography

#### Global Styles (`apps/web/src/app/globals.css`)

- ✅ CSS custom properties for all colors
- ✅ Responsive typography with proper line heights
- ✅ Accessibility-focused focus states (WCAG 2.1 Level AA)
- ✅ Custom scrollbar styling
- ✅ Utility classes (line-clamp, aspect-ratios, glass morphism)

#### Design Tokens (`apps/web/src/lib/design-tokens.ts`)

- ✅ TypeScript constants for all design values
- ✅ Order status color mappings
- ✅ Button and input size configurations
- ✅ Comprehensive documentation

---

### 2. **UI Component Library** (@repo/ui)

**26+ Production-Ready Components** with full accessibility:

#### Core Components (4)

- **Button** - 7 variants, loading states, icons, ButtonGroup, IconButton
- **Input** - Labels, errors, helper text, left/right icons
- **Card** - 3 variants (default, elevated, outlined) with sub-components
- **Badge** - Order status variants with dot indicators

#### Form Components (6)

- Textarea, Select (Radix UI), Checkbox, Radio, Switch, Label

#### Feedback Components (3)

- **Skeleton** - 8 variants for loading states
- **Spinner** - With overlay and button variants
- **Alert** - 4 variants (success, warning, error, info)

#### Overlay Components (6)

- Dialog, Drawer (4 positions), Dropdown, Tooltip, Popover, AlertDialog

#### Data Display (4)

- **Avatar** - With fallback initials and AvatarGroup
- EmptyState, StatusIndicator, Separator

#### Layout Components (3)

- Container, Stack (HStack/VStack), Grid (responsive)

#### Utilities (`packages/ui/src/lib/utils.ts`)

- `cn()` - className merger
- `formatCurrency()` - Indian Rupee formatting
- `formatDate()`, `formatTime()`, `timeElapsed()`
- `debounce()`, `throttle()`, `getInitials()`

**Component Features:**

- ✅ Full TypeScript support
- ✅ WCAG 2.1 Level AA accessible
- ✅ Keyboard navigation
- ✅ Loading, error, disabled states
- ✅ Smooth animations (300ms)
- ✅ Mobile responsive
- ✅ Comprehensive JSDoc documentation

---

### 3. **Professional Landing Page** (`apps/web/src/app/page.tsx`)

Complete SaaS landing page with:

- **Navigation** - Sticky header with glass morphism
- **Hero Section** - Value proposition + social proof (50+ restaurants, 15-20% AOV increase)
- **Features Section** - 6 core capabilities with animated cards
  - QR-Based Digital Menu
  - Smart Order Management
  - Seamless Payments (Razorpay)
  - Business Intelligence
  - Customer Loyalty Programs
  - Inventory Tracking
- **How It Works** - 3-step visual process
- **Pricing Section** - 3 tiers (₹2K, ₹5K, ₹10K/month)
- **Social Proof** - Metrics and testimonials
- **Final CTA** - Gradient background with dual CTAs
- **Footer** - 4-column navigation

---

### 4. **Authentication Pages**

#### Sign In (`apps/web/src/app/auth/login/page.tsx`)

- Clean, centered form with elevation
- Email & password inputs with icons
- Form validation (react-hook-form)
- Error handling with Alert component
- Loading states
- "Forgot password" and "Sign up" links

#### Sign Up (`apps/web/src/app/auth/register/page.tsx`)

- Two-column layout (benefits sidebar + form)
- 7 validated input fields:
  - Name, Email, Restaurant Name, Phone
  - Password (strength requirements)
  - Confirm password
- Benefits sidebar with checkmarks
- Real-time validation
- Terms acceptance
- Responsive design

---

### 5. **Application Constants** (`apps/web/src/config/constants.ts`)

```typescript
APP_NAME: 'Streetly'
APP_DESCRIPTION: 'Modern POS and Digital Menu Platform for Restaurants'
APP_TAGLINE: 'Transform Your Restaurant Operations with Smart Technology'

ROUTES: HOME, LOGIN, REGISTER, DASHBOARD, ONBOARDING, MENU, ORDERS, ANALYTICS, SETTINGS
FEATURES: 6 core features with icons
PRICING: 3 tiers with features
QUERY_KEYS: Extended for new entities
```

---

## 🎯 Design Principles

### **60-30-10 Color Rule**

- ✅ Primary (#222831): Headers, text, dark backgrounds (60%)
- ✅ Secondary (#393E46): Cards, sections (30%)
- ✅ Accent (#10B981): CTAs, highlights (10% - used sparingly!)

### **Accessibility (WCAG 2.1 Level AA)**

- ✅ Keyboard navigation
- ✅ Screen reader support (ARIA)
- ✅ Focus indicators
- ✅ Color contrast 4.5:1
- ✅ Touch targets 44x44px
- ✅ Semantic HTML

### **Responsive Design**

- ✅ Mobile-first approach
- ✅ Breakpoints: sm (640), md (768), lg (1024), xl (1280), 2xl (1536)
- ✅ Touch-friendly interactions

---

## 📊 Technical Stack

**Frontend:**

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS (with custom config)
- React Hook Form + Zod validation
- Lucide React icons

**UI Library:**

- Class Variance Authority (CVA)
- Radix UI primitives
- clsx + tailwind-merge

**Monorepo:**

- Turborepo
- Shared @repo/ui package
- Shared @repo/types package

---

## 🚀 Key Features

1. **Production-Ready Components**
   - 26+ fully documented components
   - Storybook-ready (JSDoc examples)
   - Full TypeScript interfaces

2. **Professional Branding**
   - Restaurant-focused B2B SaaS positioning
   - Clear value proposition
   - Pricing transparency

3. **Developer Experience**
   - Comprehensive README in `packages/ui/`
   - Design tokens for consistency
   - Utility functions for common tasks

4. **User Experience**
   - Smooth animations (300ms default)
   - Loading states throughout
   - Error handling with helpful messages
   - Visual hierarchy with proper whitespace

---

## 📂 Files Changed

### New Files

- `apps/web/src/lib/design-tokens.ts` - TypeScript design tokens
- `apps/web/src/app/auth/register/page.tsx` - Sign-up page
- `packages/ui/README.md` - Comprehensive documentation
- `packages/ui/src/lib/utils.ts` - Utility functions
- 22 new UI components in `packages/ui/src/components/`

### Modified Files

- `apps/web/tailwind.config.ts` - Complete design system
- `apps/web/src/app/globals.css` - Global styles and utilities
- `apps/web/src/app/page.tsx` - Streetly landing page
- `apps/web/src/app/auth/login/page.tsx` - Updated sign-in
- `apps/web/src/config/constants.ts` - Streetly branding
- `packages/ui/src/components/Button.tsx` - Enhanced with variants
- `packages/ui/src/components/Card.tsx` - Enhanced with sub-components
- `packages/ui/src/components/index.ts` - Export all components

---

## ✅ Quality Checklist

- ✅ TypeScript - No type errors
- ✅ ESLint - All rules passing
- ✅ Accessibility - WCAG 2.1 Level AA
- ✅ Responsive - Mobile, tablet, desktop
- ✅ Documentation - JSDoc on all components
- ✅ Design System - Consistent throughout
- ✅ Color Contrast - 4.5:1 minimum
- ✅ Performance - Optimized bundle size

---

## 🎨 Visual Preview

**Landing Page:**

- Hero with QR code mockup
- Feature cards with hover effects
- Pricing comparison table
- Social proof metrics
- Gradient CTA sections

**Authentication:**

- Clean forms with validation
- Error states with animations
- Loading spinners
- Responsive layouts

---

## 📝 Next Steps

After merging this PR, you can proceed with:

1. **Phase 2**: Database models (Restaurant, Table, MenuItem, Order)
2. **Phase 3**: Restaurant onboarding flow
3. **Phase 4**: Digital menu and order management
4. **Phase 5**: Payment integration (Razorpay)
5. **Phase 6**: Analytics dashboard

---

## 🔗 Related

- Closes: Design system setup task
- Implements: B2B SaaS positioning for Streetly
- Addresses: Professional UI component library requirement

---

**Review Checklist:**

- [ ] Design system colors match specification
- [ ] All components are accessible
- [ ] Landing page reflects restaurant focus
- [ ] Authentication pages work as expected
- [ ] Mobile responsive throughout
- [ ] No console errors or warnings

---

Built with ❤️ for modern restaurants in India 🇮🇳
