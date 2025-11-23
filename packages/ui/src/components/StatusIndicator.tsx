import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '../lib/utils';

const statusIndicatorVariants = cva(
  'inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium',
  {
    variants: {
      variant: {
        success: 'bg-accent-100 text-accent-900',
        warning: 'bg-warning-100 text-warning-900',
        error: 'bg-error-100 text-error-900',
        info: 'bg-info-100 text-info-900',
        neutral: 'bg-neutral-200 text-neutral-900',
        // Order status specific variants
        pending: 'bg-warning-100 text-warning-900',
        confirmed: 'bg-info-100 text-info-900',
        preparing: 'bg-accent-100 text-accent-900',
        ready: 'bg-accent-200 text-accent-900',
        served: 'bg-neutral-200 text-neutral-800',
        cancelled: 'bg-error-100 text-error-900',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
      dotPosition: {
        left: 'flex-row',
        right: 'flex-row-reverse',
      },
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'md',
      dotPosition: 'left',
    },
  }
);

const dotVariants = cva('h-2 w-2 rounded-full', {
  variants: {
    variant: {
      success: 'bg-accent-600',
      warning: 'bg-warning-600',
      error: 'bg-error-600',
      info: 'bg-info-600',
      neutral: 'bg-neutral-600',
      pending: 'bg-warning-600',
      confirmed: 'bg-info-600',
      preparing: 'bg-accent-600',
      ready: 'bg-accent-700',
      served: 'bg-neutral-600',
      cancelled: 'bg-error-600',
    },
    pulse: {
      true: 'animate-pulse',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'neutral',
    pulse: false,
  },
});

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusIndicatorVariants> {
  /** Status label */
  label?: string;
  /** Whether to show dot */
  showDot?: boolean;
  /** Whether dot should pulse */
  pulse?: boolean;
}

/**
 * StatusIndicator Component
 *
 * A status indicator with a colored dot and label.
 * Perfect for showing order status, connection status, etc.
 *
 * @example
 * ```tsx
 * <StatusIndicator variant="success" label="Online" pulse />
 * <StatusIndicator variant="preparing" label="Preparing" showDot />
 * <StatusIndicator variant="error" label="Failed" />
 * ```
 */
export const StatusIndicator = React.forwardRef<HTMLSpanElement, StatusIndicatorProps>(
  (
    {
      className,
      variant,
      size,
      dotPosition,
      label,
      showDot = true,
      pulse = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(statusIndicatorVariants({ variant, size, dotPosition }), className)}
        {...props}
      >
        {showDot && <span className={cn(dotVariants({ variant, pulse }))} aria-hidden="true" />}
        {label || children}
      </span>
    );
  }
);

StatusIndicator.displayName = 'StatusIndicator';

/**
 * StatusDot Component
 *
 * Just the status dot without label.
 *
 * @example
 * ```tsx
 * <StatusDot variant="success" pulse />
 * <StatusDot variant="error" />
 * ```
 */
export interface StatusDotProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof dotVariants> {}

export const StatusDot = React.forwardRef<HTMLSpanElement, StatusDotProps>(
  ({ className, variant, pulse, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(dotVariants({ variant, pulse }), className)}
        aria-label={`Status: ${variant}`}
        {...props}
      />
    );
  }
);

StatusDot.displayName = 'StatusDot';

/**
 * StatusBadge Component
 *
 * A larger status badge with icon support.
 *
 * @example
 * ```tsx
 * <StatusBadge variant="success" icon={<CheckIcon />}>
 *   Completed
 * </StatusBadge>
 * ```
 */
export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusIndicatorVariants> {
  /** Icon to display */
  icon?: React.ReactNode;
}

export const StatusBadge = React.forwardRef<HTMLDivElement, StatusBadgeProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center gap-2 rounded-lg px-3 py-2 font-medium shadow-sm',
          {
            'bg-accent-100 text-accent-900 border border-accent-200': variant === 'success',
            'bg-warning-100 text-warning-900 border border-warning-200': variant === 'warning',
            'bg-error-100 text-error-900 border border-error-200': variant === 'error',
            'bg-info-100 text-info-900 border border-info-200': variant === 'info',
            'bg-neutral-200 text-neutral-900 border border-neutral-300': variant === 'neutral',
          },
          {
            'px-2 py-1 text-xs': size === 'sm',
            'px-3 py-2 text-sm': size === 'md',
            'px-4 py-2.5 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </div>
    );
  }
);

StatusBadge.displayName = 'StatusBadge';
