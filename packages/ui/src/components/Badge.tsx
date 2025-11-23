import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '../lib/utils';

const badgeVariants = cva('inline-flex items-center rounded-full font-semibold transition-colors', {
  variants: {
    variant: {
      default: 'bg-primary-100 text-primary-800',
      success: 'bg-accent-100 text-accent-800',
      warning: 'bg-warning-100 text-warning-800',
      error: 'bg-error-100 text-error-800',
      info: 'bg-info-100 text-info-800',
      secondary: 'bg-secondary-100 text-secondary-800',
      // Order status specific variants
      pending: 'bg-warning-100 text-warning-800',
      confirmed: 'bg-info-100 text-info-800',
      preparing: 'bg-accent-100 text-accent-800',
      ready: 'bg-accent-200 text-accent-900',
      served: 'bg-neutral-200 text-neutral-800',
      cancelled: 'bg-error-100 text-error-800',
    },
    size: {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Icon to display before the text */
  icon?: React.ReactNode;
  /** Dot indicator instead of icon */
  dot?: boolean;
}

/**
 * Badge Component
 *
 * A badge component for displaying status, labels, and categories.
 * Includes specific variants for order statuses.
 *
 * @example
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * <Badge variant="preparing" size="lg" dot>Preparing</Badge>
 * <Badge variant="error" icon={<AlertIcon />}>Error</Badge>
 * ```
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, icon, dot, children, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props}>
        {dot && <span className="mr-1.5 h-2 w-2 rounded-full bg-current" aria-hidden="true" />}
        {icon && (
          <span className="mr-1 flex items-center" aria-hidden="true">
            {icon}
          </span>
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
