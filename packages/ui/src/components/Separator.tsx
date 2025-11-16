import React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '../lib/utils';

export interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  /** Label to display in the middle of separator */
  label?: string;
}

/**
 * Separator Component
 *
 * A divider line using Radix UI with custom styling.
 * Supports horizontal and vertical orientations, and optional labels.
 *
 * @example
 * ```tsx
 * <Separator />
 * <Separator orientation="vertical" className="h-20" />
 * <Separator label="OR" />
 * ```
 */
export const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = 'horizontal',
      decorative = true,
      label,
      ...props
    },
    ref
  ) => {
    if (label && orientation === 'horizontal') {
      return (
        <div className="relative flex items-center py-4">
          <div className="flex-grow">
            <SeparatorPrimitive.Root
              ref={ref}
              decorative={decorative}
              orientation={orientation}
              className={cn('h-px bg-neutral-300', className)}
              {...props}
            />
          </div>
          <span className="mx-4 flex-shrink text-sm text-neutral-600">
            {label}
          </span>
          <div className="flex-grow">
            <SeparatorPrimitive.Root
              decorative={decorative}
              orientation={orientation}
              className={cn('h-px bg-neutral-300', className)}
              {...props}
            />
          </div>
        </div>
      );
    }

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          'shrink-0 bg-neutral-300',
          orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
          className
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';
