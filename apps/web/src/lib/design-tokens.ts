/**
 * Design Tokens for Streetly App
 *
 * This file exports all design tokens used throughout the application.
 * These tokens align with the Tailwind configuration and Material Design 3 principles.
 *
 * @see apps/web/tailwind.config.ts
 */

// =============================================================================
// COLORS
// =============================================================================

/**
 * Brand Color Palette (60-30-10 Rule)
 * - Primary (#222831): 60% usage - main backgrounds, headers, primary text
 * - Secondary (#393E46): 30% usage - cards, secondary surfaces, secondary text
 * - Accent (#10B981): 10% usage - CTAs, highlights, success states, active indicators
 * - Neutral (#EEEEEE): backgrounds, disabled states
 */

export const colors = {
  // Primary Color - Dark Navy (#222831) - 60% usage
  primary: {
    DEFAULT: '#222831',
    50: '#f5f6f7',
    100: '#e5e7eb',
    200: '#c8ccd3',
    300: '#9fa5b0',
    400: '#6b7280',
    500: '#393E46',
    600: '#222831', // Main brand color
    700: '#1a1f26',
    800: '#13171c',
    900: '#0d1013',
  },

  // Secondary Color - Charcoal (#393E46) - 30% usage
  secondary: {
    DEFAULT: '#393E46',
    50: '#f6f7f8',
    100: '#eceef0',
    200: '#d4d7dc',
    300: '#b0b5bd',
    400: '#84898f',
    500: '#393E46', // Main secondary color
    600: '#2e3139',
    700: '#25282e',
    800: '#1c1f23',
    900: '#14161a',
  },

  // Accent Color - Emerald Green (#10B981) - 10% usage (CTAs, Success, Highlights)
  accent: {
    DEFAULT: '#10B981',
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10B981', // Main accent color
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },

  // Neutral Color - Light Gray (#EEEEEE)
  neutral: {
    DEFAULT: '#EEEEEE',
    50: '#FFFFFF',
    100: '#FAFAFA',
    200: '#F5F5F5',
    300: '#EEEEEE', // Main neutral color
    400: '#E0E0E0',
    500: '#BDBDBD',
    600: '#9E9E9E',
    700: '#757575',
    800: '#616161',
    900: '#424242',
  },

  // Semantic Colors for States
  success: {
    DEFAULT: '#10B981',
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },

  warning: {
    DEFAULT: '#F59E0B',
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#F59E0B',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },

  error: {
    DEFAULT: '#EF4444',
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#EF4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },

  info: {
    DEFAULT: '#3B82F6',
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3B82F6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
} as const;

// =============================================================================
// TYPOGRAPHY
// =============================================================================

/**
 * Typography Scale (Major Third - 1.250 ratio)
 * Following typographic best practices with proper line heights and letter spacing
 */

export const typography = {
  fontSize: {
    xs: {
      size: '0.75rem', // 12px
      lineHeight: '1rem', // 16px
      letterSpacing: '0.02em',
    },
    sm: {
      size: '0.875rem', // 14px
      lineHeight: '1.25rem', // 20px
      letterSpacing: '0.01em',
    },
    base: {
      size: '1rem', // 16px
      lineHeight: '1.5rem', // 24px
      letterSpacing: '0',
    },
    lg: {
      size: '1.125rem', // 18px
      lineHeight: '1.75rem', // 28px
      letterSpacing: '0',
    },
    xl: {
      size: '1.25rem', // 20px
      lineHeight: '1.75rem', // 28px
      letterSpacing: '-0.01em',
    },
    '2xl': {
      size: '1.5rem', // 24px
      lineHeight: '2rem', // 32px
      letterSpacing: '-0.01em',
    },
    '3xl': {
      size: '1.875rem', // 30px
      lineHeight: '2.25rem', // 36px
      letterSpacing: '-0.02em',
    },
    '4xl': {
      size: '2.25rem', // 36px
      lineHeight: '2.5rem', // 40px
      letterSpacing: '-0.02em',
    },
    '5xl': {
      size: '3rem', // 48px
      lineHeight: '1', // 48px
      letterSpacing: '-0.02em',
    },
  },

  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

// =============================================================================
// SPACING
// =============================================================================

/**
 * Spacing Scale (4px base unit)
 * Provides consistent spacing throughout the application
 */

export const spacing = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '6rem', // 96px
} as const;

/**
 * Spacing values in pixels for calculations
 */
export const spacingPx = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 96,
} as const;

// =============================================================================
// BORDER RADIUS
// =============================================================================

/**
 * Border Radius Scale
 * Defines corner rounding for consistent UI elements
 */

export const borderRadius = {
  none: '0',
  sm: '0.25rem', // 4px
  DEFAULT: '0.5rem', // 8px
  md: '0.75rem', // 12px
  lg: '1rem', // 16px
  xl: '1.5rem', // 24px
  full: '9999px', // Fully rounded (pills, circles)
} as const;

// =============================================================================
// SHADOWS (Elevation)
// =============================================================================

/**
 * Elevation System using Shadows
 * Creates depth and hierarchy in the UI
 */

export const shadows = {
  xs: '0 1px 2px 0 rgba(34, 40, 49, 0.05)',
  sm: '0 1px 3px 0 rgba(34, 40, 49, 0.1), 0 1px 2px -1px rgba(34, 40, 49, 0.1)',
  DEFAULT: '0 4px 6px -1px rgba(34, 40, 49, 0.1), 0 2px 4px -2px rgba(34, 40, 49, 0.1)',
  md: '0 10px 15px -3px rgba(34, 40, 49, 0.1), 0 4px 6px -4px rgba(34, 40, 49, 0.1)',
  lg: '0 20px 25px -5px rgba(34, 40, 49, 0.1), 0 8px 10px -6px rgba(34, 40, 49, 0.1)',
  xl: '0 25px 50px -12px rgba(34, 40, 49, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(34, 40, 49, 0.05)',
  none: 'none',
} as const;

// =============================================================================
// ANIMATIONS
// =============================================================================

/**
 * Animation Durations and Easing
 */

export const animations = {
  duration: {
    fast: '150ms',
    DEFAULT: '300ms',
    slow: '500ms',
  },

  easing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    linear: 'linear',
  },

  keyframes: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    slideUp: {
      from: { transform: 'translateY(10px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    slideDown: {
      from: { transform: 'translateY(-10px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    scaleIn: {
      from: { transform: 'scale(0.95)', opacity: 0 },
      to: { transform: 'scale(1)', opacity: 1 },
    },
  },
} as const;

// =============================================================================
// BREAKPOINTS
// =============================================================================

/**
 * Responsive Breakpoints
 * Following mobile-first approach
 */

export const breakpoints = {
  sm: '640px', // Small devices
  md: '768px', // Tablets
  lg: '1024px', // Desktops
  xl: '1280px', // Large desktops
  '2xl': '1536px', // Extra large desktops
} as const;

// =============================================================================
// Z-INDEX SCALE
// =============================================================================

/**
 * Z-Index Scale for layering
 * Prevents z-index conflicts
 */

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// =============================================================================
// COMPONENT-SPECIFIC TOKENS
// =============================================================================

/**
 * Button Sizes
 */
export const buttonSizes = {
  sm: {
    height: '2.25rem', // 36px
    padding: '0 0.75rem', // 12px
    fontSize: typography.fontSize.sm.size,
  },
  md: {
    height: '2.75rem', // 44px
    padding: '0 1.25rem', // 20px
    fontSize: typography.fontSize.base.size,
  },
  lg: {
    height: '3.5rem', // 56px
    padding: '0 2rem', // 32px
    fontSize: typography.fontSize.lg.size,
  },
} as const;

/**
 * Input Sizes
 */
export const inputSizes = {
  sm: {
    height: '2.25rem', // 36px
    padding: '0.5rem 0.75rem',
    fontSize: typography.fontSize.sm.size,
  },
  md: {
    height: '3rem', // 48px
    padding: '0.75rem 1rem',
    fontSize: typography.fontSize.base.size,
  },
  lg: {
    height: '3.5rem', // 56px
    padding: '1rem 1.25rem',
    fontSize: typography.fontSize.lg.size,
  },
} as const;

/**
 * Order Status Colors
 * Maps order statuses to appropriate colors
 */
export const orderStatusColors = {
  PENDING: colors.warning[500], // Amber
  CONFIRMED: colors.info[500], // Blue
  PREPARING: colors.accent[500], // Green
  READY: colors.accent[600], // Darker green
  SERVED: colors.neutral[600], // Gray
  CANCELLED: colors.error[500], // Red
} as const;

// =============================================================================
// EXPORTS
// =============================================================================

/**
 * All design tokens in a single object
 */
export const designTokens = {
  colors,
  typography,
  spacing,
  spacingPx,
  borderRadius,
  shadows,
  animations,
  breakpoints,
  zIndex,
  buttonSizes,
  inputSizes,
  orderStatusColors,
} as const;

export default designTokens;
