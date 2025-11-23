import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import React from 'react';

import { cn } from '../lib/utils';

const spinnerVariants = cva('animate-spin', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12',
    },
    variant: {
      default: 'text-primary-600',
      accent: 'text-accent-500',
      white: 'text-white',
      muted: 'text-neutral-600',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  /** Label for screen readers */
  label?: string;
  /** Whether to center the spinner */
  centered?: boolean;
}

/**
 * Spinner Component
 *
 * A loading spinner with different sizes and variants.
 * Uses lucide-react Loader2 icon with rotation animation.
 *
 * @example
 * ```tsx
 * <Spinner size="md" />
 * <Spinner size="lg" variant="accent" label="Loading data..." />
 * <Spinner centered />
 * ```
 */
export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, variant, label = 'Loading...', centered, ...props }, ref) => {
    const spinner = (
      <div
        ref={ref}
        className={cn(centered && 'flex items-center justify-center', className)}
        role="status"
        aria-live="polite"
        aria-label={label}
        {...props}
      >
        <Loader2 className={cn(spinnerVariants({ size, variant }))} aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </div>
    );

    return spinner;
  }
);

Spinner.displayName = 'Spinner';

/**
 * SpinnerOverlay Component
 *
 * A full-screen loading overlay with spinner.
 *
 * @example
 * ```tsx
 * {isLoading && <SpinnerOverlay />}
 * <SpinnerOverlay message="Loading your data..." />
 * ```
 */
export interface SpinnerOverlayProps extends Omit<SpinnerProps, 'centered'> {
  /** Message to display below spinner */
  message?: string;
}

export const SpinnerOverlay = React.forwardRef<HTMLDivElement, SpinnerOverlayProps>(
  ({ className: _className, message, size = 'xl', variant = 'white', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary-900/80 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label="Loading"
      >
        <Spinner size={size} variant={variant} {...props} />
        {message && <p className="mt-4 text-lg font-medium text-white">{message}</p>}
      </div>
    );
  }
);

SpinnerOverlay.displayName = 'SpinnerOverlay';

/**
 * SpinnerButton Component
 *
 * A spinner suitable for use inside buttons.
 *
 * @example
 * ```tsx
 * <button>
 *   <SpinnerButton /> Loading...
 * </button>
 * ```
 */
export interface SpinnerButtonProps extends Omit<SpinnerProps, 'centered' | 'size'> {
  /** Size (defaults to sm for buttons) */
  size?: 'sm' | 'md';
}

export const SpinnerButton = React.forwardRef<HTMLDivElement, SpinnerButtonProps>(
  ({ className, size = 'sm', variant = 'white', ...props }, ref) => {
    return (
      <span className={cn('inline-flex items-center', className)}>
        <Spinner ref={ref} size={size} variant={variant} {...props} />
      </span>
    );
  }
);

SpinnerButton.displayName = 'SpinnerButton';
