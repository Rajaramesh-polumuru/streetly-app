import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '../lib/utils';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-primary-900',
        muted: 'text-neutral-600',
        error: 'text-error-500',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  /** Whether the field is required */
  required?: boolean;
}

/**
 * Label Component
 *
 * A form label using Radix UI with custom styling.
 * Automatically handles required indicator.
 *
 * @example
 * ```tsx
 * <Label htmlFor="email" required>
 *   Email address
 * </Label>
 *
 * <Label variant="muted" size="sm">
 *   Optional field
 * </Label>
 * ```
 */
export const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, variant, size, required, children, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-1 text-error-500" aria-label="required">
          *
        </span>
      )}
    </LabelPrimitive.Root>
  )
);

Label.displayName = 'Label';
