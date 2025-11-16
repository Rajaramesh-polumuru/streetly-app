# @repo/ui - Streetly UI Component Library

A comprehensive, accessible, and production-ready component library for the Streetly food ordering application.

## Features

✨ **26+ Production-Ready Components** - From buttons to complex overlays
🎨 **Consistent Design System** - Following 60-30-10 color rule
♿ **WCAG 2.1 Level AA Accessible** - Full keyboard navigation and ARIA support
📱 **Fully Responsive** - Mobile-first approach with touch-friendly interactions
🎯 **Type-Safe** - Complete TypeScript support with proper interfaces
🎭 **Multiple Variants** - Flexible components for all use cases
⚡ **Optimized Performance** - Minimal bundle size with tree-shaking
🌗 **Dark Mode Ready** - Optional dark mode support
🎬 **Smooth Animations** - 300ms transitions for polished UX

## Design System

### Color Palette (60-30-10 Rule)

```typescript
Primary (#222831)   - 60% usage - Main backgrounds, headers, primary text
Secondary (#393E46) - 30% usage - Cards, secondary surfaces, secondary text
Accent (#10B981)    - 10% usage - CTAs, highlights, success states, active indicators
Neutral (#EEEEEE)   - Backgrounds, disabled states
```

### Semantic Colors

```typescript
Success:  #10B981 (green)
Warning:  #F59E0B (amber)
Error:    #EF4444 (red)
Info:     #3B82F6 (blue)
```

## Installation

The UI package is already part of the monorepo. Import components from `@repo/ui`:

```tsx
import { Button, Input, Card } from '@repo/ui';
```

## Component Categories

### Core Components

- **Button** - Primary, accent, secondary, outline, ghost, destructive, link variants
- **Input** - Text input with label, error, helper text, and icons
- **Card** - Flexible container with variants (default, elevated, outlined)
- **Badge** - Status indicators with order-specific variants

### Form Components

- **Textarea** - Multi-line text input
- **Select** - Dropdown select with custom styling (Radix UI)
- **Checkbox** - Checkbox input with label (Radix UI)
- **Radio** - Radio group with horizontal/vertical layout (Radix UI)
- **Switch** - Toggle switch (Radix UI)
- **Label** - Form label with variants

### Feedback Components

- **Skeleton** - Loading skeletons (8 variants: text, circle, rectangle, card, avatar, button, input, table)
- **Spinner** - Loading spinner with sizes
- **Alert** - Alert messages (success, warning, error, info)

### Overlay Components

- **Dialog** - Modal dialogs (Radix UI)
- **Drawer** - Side drawers for cart and navigation (4 positions)
- **Dropdown** - Dropdown menus with submenus (Radix UI)
- **Tooltip** - Tooltips with positioning (Radix UI)
- **Popover** - Rich popovers (Radix UI)
- **AlertDialog** - Confirmation dialogs (Radix UI)

### Data Display Components

- **Avatar** - User avatars with fallback initials (Radix UI)
- **EmptyState** - Empty state illustrations
- **StatusIndicator** - Status dots with labels
- **Separator** - Divider lines (Radix UI)

### Layout Components

- **Container** - Responsive container with max-width
- **Stack** - Vertical/horizontal stack layout
- **Grid** - Responsive grid layout

## Usage Examples

### Button

```tsx
import { Button } from '@repo/ui';

// Primary CTA
<Button variant="accent" size="lg" fullWidth>
  Place Order
</Button>

// With loading state
<Button variant="primary" isLoading loadingText="Saving...">
  Save
</Button>

// With icons
import { ShoppingCart } from 'lucide-react';
<Button variant="accent" leftIcon={<ShoppingCart className="h-4 w-4" />}>
  Add to Cart
</Button>
```

### Input

```tsx
import { Input } from '@repo/ui';
import { Search, Mail } from 'lucide-react';

// Basic input
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  required
/>

// With error
<Input
  label="Password"
  type="password"
  error="Password must be at least 8 characters"
/>

// With icons
<Input
  label="Search"
  leftIcon={<Search className="h-4 w-4" />}
  placeholder="Search menu items..."
/>
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@repo/ui';

<Card variant="elevated" padding="lg">
  <CardHeader>
    <CardTitle>Order Summary</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
  <CardFooter>
    <Button variant="accent" fullWidth>Checkout</Button>
  </CardFooter>
</Card>
```

### Badge

```tsx
import { Badge } from '@repo/ui';

// Order status badges
<Badge variant="preparing" dot>Preparing</Badge>
<Badge variant="ready" size="lg">Ready for Pickup</Badge>

// Generic badges
<Badge variant="success">Active</Badge>
<Badge variant="error">Out of Stock</Badge>
```

### Select

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@repo/ui';

<Select value={category} onValueChange={setCategory}>
  <SelectTrigger>
    <SelectValue placeholder="Select category" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="appetizers">Appetizers</SelectItem>
    <SelectItem value="mains">Main Course</SelectItem>
    <SelectItem value="desserts">Desserts</SelectItem>
  </SelectContent>
</Select>
```

### Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@repo/ui';
import { Button } from '@repo/ui';

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Order</DialogTitle>
      <DialogDescription>
        Are you sure you want to place this order?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="accent">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Drawer

```tsx
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from '@repo/ui';
import { ShoppingCart } from 'lucide-react';

<Drawer position="right">
  <DrawerTrigger asChild>
    <Button variant="accent" leftIcon={<ShoppingCart className="h-4 w-4" />}>
      View Cart
    </Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>Your Cart</DrawerHeader>
    <DrawerBody>
      {/* Cart items */}
    </DrawerBody>
    <DrawerFooter>
      <Button variant="accent" fullWidth>Checkout</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

### Skeleton

```tsx
import { Skeleton, SkeletonCard, SkeletonTable } from '@repo/ui';

// Loading card
<SkeletonCard />

// Loading table
<SkeletonTable rows={5} columns={4} />

// Custom skeleton
<Skeleton variant="circle" className="h-12 w-12" />
<Skeleton variant="text" lines={3} />
```

### Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from '@repo/ui';

// Single avatar
<Avatar size="lg" online>
  <AvatarImage src="/user.jpg" alt="John Doe" />
  <AvatarFallback name="John Doe" />
</Avatar>

// Avatar group (overlapping)
<AvatarGroup max={3} size="md">
  <Avatar><AvatarFallback name="Alice" /></Avatar>
  <Avatar><AvatarFallback name="Bob" /></Avatar>
  <Avatar><AvatarFallback name="Charlie" /></Avatar>
  <Avatar><AvatarFallback name="David" /></Avatar>
</AvatarGroup>
```

### Layout Components

```tsx
import { Container, Stack, Grid, GridItem } from '@repo/ui';

// Container
<Container maxWidth="lg" padding="lg">
  {/* Content */}
</Container>

// Stack (Vertical)
<Stack spacing={4} align="center">
  <Button>First</Button>
  <Button>Second</Button>
  <Button>Third</Button>
</Stack>

// Grid
<Grid cols={{ sm: 1, md: 2, lg: 3 }} gap={6}>
  <GridItem>Item 1</GridItem>
  <GridItem>Item 2</GridItem>
  <GridItem colSpan={2}>Item 3 (spans 2 columns)</GridItem>
</Grid>
```

## Utility Functions

The package also exports useful utility functions:

```tsx
import { cn, formatCurrency, formatDate, formatTime, getInitials } from '@repo/ui';

// Merge classes
const className = cn('px-4 py-2', isActive && 'bg-accent-500');

// Format currency
formatCurrency(1500) // "₹1,500"

// Format date
formatDate(new Date()) // "16 November 2025"

// Format time
formatTime(new Date()) // "2:30 PM"

// Get initials
getInitials("John Doe") // "JD"
```

## Accessibility

All components follow WCAG 2.1 Level AA guidelines:

- ✅ Keyboard navigation (Tab, Enter, Escape, Arrow keys)
- ✅ Screen reader support (ARIA labels, roles, descriptions)
- ✅ Focus indicators (visible focus rings)
- ✅ Color contrast (4.5:1 for text, 3:1 for large text)
- ✅ Touch targets (minimum 44x44px)
- ✅ Semantic HTML

## Design Principles

1. **60-30-10 Color Rule**
   - Primary (#222831): 60% - Headers, main text, dark backgrounds
   - Secondary (#393E46): 30% - Cards, sections, secondary text
   - Accent (#10B981): 10% - CTAs, active states, success indicators

2. **Material Design 3 Elevation**
   - Use shadows to create depth and hierarchy
   - xs, sm, md, lg, xl shadow variants

3. **iOS Human Interface Guidelines**
   - Clear typography hierarchy
   - Touch-friendly targets (44x44px minimum)
   - Smooth animations (300ms default)

4. **Mobile-First**
   - Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
   - Stack layouts on mobile, grid on desktop

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)

## Contributing

When adding new components:

1. Use `React.forwardRef` for ref support
2. Use `class-variance-authority` for variants
3. Include full TypeScript types
4. Add JSDoc comments with examples
5. Follow existing component patterns
6. Test accessibility with screen readers
7. Add to `components/index.ts` exports
8. Update this README

## License

Private - Part of Streetly monorepo
