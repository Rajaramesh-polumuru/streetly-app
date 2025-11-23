/**
 * Streetly UI Component Library
 *
 * A comprehensive, accessible, and production-ready component library
 * for the Streetly food ordering application.
 *
 * Features:
 * - 26+ production-ready components
 * - Full TypeScript support
 * - WCAG 2.1 Level AA accessibility
 * - Material Design 3 and iOS HIG principles
 * - Consistent design system (60-30-10 color rule)
 * - Responsive and mobile-friendly
 * - Dark mode support (optional)
 *
 * @packageDocumentation
 */

// Export all components
export * from './components';

// Export utilities
export {
  cn,
  formatCurrency,
  formatDate,
  formatTime,
  formatDateTime,
  timeElapsed,
  truncate,
  getInitials,
  sleep,
  debounce,
  throttle,
  isEmpty,
  generateId,
} from './lib/utils';
