# @repo/ui

> Streetly UI Component Library - Production-ready, accessible React components for the Streetly restaurant management platform.

## Overview

The `@repo/ui` package provides a comprehensive set of 26+ accessible, production-ready React components built with:

- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Radix UI**: Accessible primitives
- **Class Variance Authority**: Type-safe variant management
- **WCAG 2.1 AA**: Accessible by default

## Quick Start

Import components directly from the package:

```tsx
import { Button, Card, Input } from '@repo/ui';

export function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button variant="accent">Submit</Button>
    </Card>
  );
}
```

## Component Library

### 26+ Production-Ready Components

**Core Components (9)**: Button, Input, Textarea, Select, Card, Badge, Avatar, Label
**Form Components (4)**: Checkbox, Radio, Switch
**Feedback Components (3)**: Alert, Spinner, Skeleton  
**Overlay Components (5)**: Dialog, Drawer, Dropdown, Tooltip, Popover, AlertDialog
**Data Display (3)**: EmptyState, StatusIndicator, Separator
**Layout (3)**: Container, Stack, Grid

For detailed documentation, see the full component guide in the main repository.

---

**Version**: 1.0.0  
**License**: MIT
