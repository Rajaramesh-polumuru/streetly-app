# Streetly Design System 🎨

> A comprehensive design system for the Streetly restaurant management platform, built with accessibility, consistency, and scalability in mind.

## Table of Contents

- [Overview](#overview)
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Spacing System](#spacing-system)
- [Components](#components)
- [Accessibility](#accessibility)
- [Best Practices](#best-practices)

## Overview

The Streetly Design System is a cohesive set of design standards, components, and guidelines that ensure consistency and quality across all touchpoints of the platform. It follows industry best practices including:

- **60-30-10 Color Rule**: Balanced visual hierarchy
- **WCAG 2.1 Level AA**: Accessible to all users
- **Material Design 3**: Modern, tactile design language
- **iOS Human Interface Guidelines**: Native feel on all platforms
- **8px Grid System**: Consistent spacing and rhythm

## Color Palette

### ColorHunt Palette

Streetly uses a professional color palette from [ColorHunt](https://colorhunt.co/palette/222831393e4600adb5eeeeee) that provides excellent contrast and modern aesthetics.

```
#222831 (Charcoal)    - Primary Dark
#393E46 (Slate Gray)  - Secondary Dark
#00ADB5 (Turquoise)   - Accent
#EEEEEE (Light Gray)  - Neutral/Background
```

### Color Distribution (60-30-10 Rule)

| Category      | Color      | Hex       | RGB                  | Usage                           | Distribution |
| ------------- | ---------- | --------- | -------------------- | ------------------------------- | ------------ |
| **Neutral**   | Light Gray | `#EEEEEE` | `rgb(238, 238, 238)` | Backgrounds, cards, large areas | **60%**      |
| **Primary**   | Charcoal   | `#222831` | `rgb(34, 40, 49)`    | Text, headings, navigation      | **25%**      |
| **Secondary** | Slate Gray | `#393E46` | `rgb(57, 62, 70)`    | Supporting text, borders        | **5%**       |
| **Accent**    | Turquoise  | `#00ADB5` | `rgb(0, 173, 181)`   | CTAs, links, highlights         | **10%**      |

### Color Scales

Each color has a full scale from 50 (lightest) to 900 (darkest) for flexibility:

#### Primary Scale

```css
--primary-50: #f5f6f7 /* Lightest backgrounds */ --primary-100: #e5e7eb /* Hover states */
  --primary-200: #c8ccd3 /* Disabled states */ --primary-300: #9fa5b0 /* Borders */
  --primary-400: #6b7280 /* Placeholder text */ --primary-500: #393e46 /* Secondary elements */
  --primary-600: #222831 /* Main text, headings */ --primary-700: #1a1f26 /* Dark accents */
  --primary-800: #13171c /* Darker elements */ --primary-900: #0d1013 /* Darkest */;
```

#### Accent Scale

```css
--accent-50: #e6f9fa /* Light backgrounds */ --accent-100: #ccf3f5 /* Subtle highlights */
  --accent-200: #99e7eb /* Borders */ --accent-300: #66dbe0 /* Hover states */ --accent-400: #33cfd6
  /* Active states */ --accent-500: #00adb5 /* Primary accent */ --accent-600: #008a91
  /* Pressed states */ --accent-700: #00676d /* Darker accents */ --accent-800: #004548
  /* Dark mode */ --accent-900: #002224 /* Darkest */;
```

#### Neutral Scale

```css
--neutral-50: #ffffff /* White */ --neutral-100: #fafafa /* Lightest gray */ --neutral-200: #f5f5f5
  /* Light gray */ --neutral-300: #eeeeee /* Main background */ --neutral-400: #e0e0e0 /* Borders */
  --neutral-500: #bdbdbd /* Dividers */ --neutral-600: #9e9e9e /* Secondary text */
  --neutral-700: #757575 /* Tertiary text */ --neutral-800: #616161 /* Dark text */
  --neutral-900: #424242 /* Darkest */;
```

### Semantic Colors

Semantic colors provide meaning and feedback:

```css
/* Success - Uses accent color */
--success: #00adb5 /* Warning */ --warning: #f59e0b /* Error */ --error: #ef4444
  /* Info - Uses accent color */ --info: #00adb5;
```

### Color Contrast Ratios

All color combinations meet WCAG 2.1 Level AA standards:

| Foreground | Background | Ratio  | Pass   |
| ---------- | ---------- | ------ | ------ |
| `#222831`  | `#FFFFFF`  | 15.8:1 | ✅ AAA |
| `#222831`  | `#EEEEEE`  | 14.2:1 | ✅ AAA |
| `#00ADB5`  | `#FFFFFF`  | 3.2:1  | ✅ AA  |
| `#00ADB5`  | `#222831`  | 4.9:1  | ✅ AA  |

## Typography

### Font Families

```css
/* Primary Font - System Font Stack */
font-family:
  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
  'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

**Why system fonts?**

- Zero load time
- Native feel on each platform
- Perfect rendering
- Excellent accessibility

### Type Scale (Major Third - 1.250)

| Name   | Size            | Line Height    | Letter Spacing | Use Case                |
| ------ | --------------- | -------------- | -------------- | ----------------------- |
| `xs`   | 12px (0.75rem)  | 16px (1rem)    | 0.02em         | Small labels, captions  |
| `sm`   | 14px (0.875rem) | 20px (1.25rem) | 0.01em         | Secondary text, helpers |
| `base` | 16px (1rem)     | 24px (1.5rem)  | 0              | Body text, paragraphs   |
| `lg`   | 18px (1.125rem) | 28px (1.75rem) | 0              | Emphasized text         |
| `xl`   | 20px (1.25rem)  | 28px (1.75rem) | -0.01em        | H6, small headings      |
| `2xl`  | 24px (1.5rem)   | 32px (2rem)    | -0.01em        | H5                      |
| `3xl`  | 30px (1.875rem) | 36px (2.25rem) | -0.02em        | H4                      |
| `4xl`  | 36px (2.25rem)  | 40px (2.5rem)  | -0.02em        | H3                      |
| `5xl`  | 48px (3rem)     | 1              | -0.02em        | H2, Hero headings       |

### Font Weights

```css
--font-normal: 400 /* Body text */ --font-medium: 500 /* Emphasized text */ --font-semibold: 600
  /* Subheadings */ --font-bold: 700 /* Headings */;
```

### Usage Examples

```tsx
// Headings
<h1 className="text-5xl font-bold text-primary-900">Main Heading</h1>
<h2 className="text-4xl font-bold text-primary-900">Section Heading</h2>
<h3 className="text-3xl font-bold text-primary-900">Subsection</h3>

// Body Text
<p className="text-base text-primary-700">Regular paragraph text</p>
<p className="text-sm text-primary-600">Secondary information</p>
<span className="text-xs text-neutral-600">Helper text</span>
```

## Spacing System

### Base Unit: 4px

All spacing follows an 8px grid system (multiples of 4px):

| Name  | Value   | Pixels | Use Case          |
| ----- | ------- | ------ | ----------------- |
| `xs`  | 0.25rem | 4px    | Tight spacing     |
| `sm`  | 0.5rem  | 8px    | Component padding |
| `md`  | 1rem    | 16px   | Standard spacing  |
| `lg`  | 1.5rem  | 24px   | Section spacing   |
| `xl`  | 2rem    | 32px   | Large sections    |
| `2xl` | 3rem    | 48px   | Page sections     |
| `3xl` | 4rem    | 64px   | Hero sections     |
| `4xl` | 6rem    | 96px   | Major divisions   |

### Layout Spacing

```tsx
// Component padding
<div className="p-4">   {/* 16px all sides */}
<div className="px-6 py-4">  {/* 24px horizontal, 16px vertical */}

// Margin between elements
<div className="mb-4">  {/* 16px bottom margin */}
<div className="space-y-6">  {/* 24px gap between children */}
```

## Border Radius

Consistent corner rounding for visual hierarchy:

| Name      | Value   | Pixels | Use Case        |
| --------- | ------- | ------ | --------------- |
| `none`    | 0       | 0px    | Square corners  |
| `sm`      | 0.25rem | 4px    | Small elements  |
| `DEFAULT` | 0.5rem  | 8px    | Buttons, inputs |
| `md`      | 0.75rem | 12px   | Cards (small)   |
| `lg`      | 1rem    | 16px   | Cards (large)   |
| `xl`      | 1.5rem  | 24px   | Modals, drawers |
| `full`    | 9999px  | Full   | Pills, avatars  |

## Shadows (Elevation System)

Six levels of elevation for depth perception:

```css
/* Level 0 - Flat */
box-shadow: none;

/* Level 1 - Subtle */
box-shadow: 0 1px 2px 0 rgba(34, 40, 49, 0.05);

/* Level 2 - Raised */
box-shadow:
  0 1px 3px 0 rgba(34, 40, 49, 0.1),
  0 1px 2px -1px rgba(34, 40, 49, 0.1);

/* Level 3 - Floating (DEFAULT) */
box-shadow:
  0 4px 6px -1px rgba(34, 40, 49, 0.1),
  0 2px 4px -2px rgba(34, 40, 49, 0.1);

/* Level 4 - Medium */
box-shadow:
  0 10px 15px -3px rgba(34, 40, 49, 0.1),
  0 4px 6px -4px rgba(34, 40, 49, 0.1);

/* Level 5 - High */
box-shadow:
  0 20px 25px -5px rgba(34, 40, 49, 0.1),
  0 8px 10px -6px rgba(34, 40, 49, 0.1);

/* Level 6 - Modal */
box-shadow: 0 25px 50px -12px rgba(34, 40, 49, 0.25);
```

## Components

### Component States

All interactive components support these states:

1. **Default**: Normal resting state
2. **Hover**: Mouse over (desktop)
3. **Active**: Being pressed/clicked
4. **Focus**: Keyboard navigation
5. **Disabled**: Not interactive
6. **Loading**: Processing

### Button Variants

```tsx
// Primary - Accent background
<Button variant="accent">Primary Action</Button>

// Secondary - Outline style
<Button variant="outline">Secondary Action</Button>

// Tertiary - Ghost/text only
<Button variant="ghost">Tertiary Action</Button>

// Destructive - Error color
<Button variant="error">Delete</Button>
```

### Input States

```tsx
// Normal
<Input placeholder="Enter text" />

// With error
<Input error="This field is required" />

// Disabled
<Input disabled />

// With icon
<Input leftIcon={<Icon />} />
```

## Accessibility

### WCAG 2.1 Level AA Compliance

All components meet or exceed WCAG 2.1 Level AA standards:

✅ **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
✅ **Keyboard Navigation**: Full keyboard support
✅ **Screen Readers**: Proper ARIA labels and roles
✅ **Focus Indicators**: Visible focus states
✅ **Touch Targets**: Minimum 44x44px
✅ **Motion**: Respects prefers-reduced-motion

### Focus Indicators

```css
*:focus-visible {
  outline: 2px solid #00adb5;
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Screen Reader Support

```tsx
// Use semantic HTML
<button aria-label="Close dialog">×</button>

// Provide context
<input aria-describedby="helper-text" />
<span id="helper-text">Your email address</span>

// Hide decorative elements
<div aria-hidden="true">★</div>
```

## Best Practices

### Do's ✅

1. **Use semantic HTML**: `<button>`, `<nav>`, `<main>`, etc.
2. **Follow color distribution**: 60% neutral, 30% primary/secondary, 10% accent
3. **Maintain spacing consistency**: Use the 8px grid system
4. **Test accessibility**: Use keyboard navigation and screen readers
5. **Provide feedback**: Loading states, error messages, success indicators
6. **Use appropriate contrast**: Meet WCAG 2.1 AA minimum ratios
7. **Optimize performance**: Use system fonts, optimize images
8. **Responsive design**: Mobile-first approach

### Don'ts ❌

1. **Don't use color alone**: Provide text or icons for meaning
2. **Don't overcomplicate**: Keep interfaces simple and focused
3. **Don't ignore errors**: Always provide clear error messages
4. **Don't skip focus states**: Essential for keyboard users
5. **Don't use tiny text**: Minimum 14px for body text
6. **Don't disable zoom**: Allow users to scale text
7. **Don't rely on hover**: Provide touch-friendly alternatives
8. **Don't ignore loading states**: Always show progress

### Component Composition

```tsx
// Good - Composable, flexible
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>

// Bad - Monolithic, inflexible
<Card title="Title" description="Description" content="Content" />
```

### Responsive Design

```tsx
// Mobile-first approach
<div className="
  p-4              /* 16px on mobile */
  md:p-6           /* 24px on tablet */
  lg:p-8           /* 32px on desktop */

  text-base        /* 16px on mobile */
  md:text-lg       /* 18px on tablet */

  grid
  grid-cols-1      /* 1 column on mobile */
  md:grid-cols-2   /* 2 columns on tablet */
  lg:grid-cols-3   /* 3 columns on desktop */
">
```

## Implementation

### Using Tailwind Classes

```tsx
import { cn } from '@repo/ui';

export function Component({ className }) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg p-6 shadow-md',
        'hover:shadow-lg transition-shadow',
        className
      )}
    >
      Content
    </div>
  );
}
```

### Using CSS Variables

```css
.custom-component {
  background-color: rgb(var(--color-neutral-50));
  color: rgb(var(--color-primary-600));
  border: 1px solid rgb(var(--color-neutral-400));
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
}
```

### Dark Mode (Future)

The design system is prepared for dark mode:

```css
.dark {
  --background: rgb(34, 40, 49);
  --foreground: rgb(238, 238, 238);
}
```

## Resources

- **Tailwind Config**: `apps/web/tailwind.config.ts`
- **Global Styles**: `apps/web/src/app/globals.css`
- **Components**: `packages/ui/src/components/`
- **Utilities**: `packages/ui/src/lib/utils.ts`

## Updates

This design system is a living document and will evolve with the product. For updates and discussions:

- Open an issue for design system improvements
- Submit PRs for component additions
- Join design system discussions

---

**Version**: 1.0.0
**Last Updated**: January 2025
**Maintained by**: Streetly Design Team
