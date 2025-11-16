import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '../lib/utils';

const stackVariants = cva(
  'flex',
  {
    variants: {
      direction: {
        row: 'flex-row',
        column: 'flex-col',
        'row-reverse': 'flex-row-reverse',
        'column-reverse': 'flex-col-reverse',
      },
      spacing: {
        0: 'gap-0',
        1: 'gap-1',
        2: 'gap-2',
        3: 'gap-3',
        4: 'gap-4',
        5: 'gap-5',
        6: 'gap-6',
        8: 'gap-8',
        10: 'gap-10',
        12: 'gap-12',
        16: 'gap-16',
      },
      align: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline',
      },
      justify: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      wrap: {
        true: 'flex-wrap',
        false: 'flex-nowrap',
      },
    },
    defaultVariants: {
      direction: 'column',
      spacing: 4,
      align: 'stretch',
      justify: 'start',
      wrap: false,
    },
  }
);

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  /** Custom element type */
  as?: React.ElementType;
}

/**
 * Stack Component
 *
 * A flexible layout component for stacking elements vertically or horizontally
 * with consistent spacing and alignment.
 *
 * @example
 * ```tsx
 * <Stack spacing={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Stack>
 *
 * <Stack direction="row" spacing={2} align="center">
 *   <Avatar />
 *   <div>User Name</div>
 * </Stack>
 *
 * <Stack direction="row" justify="between" align="center">
 *   <h1>Title</h1>
 *   <Button>Action</Button>
 * </Stack>
 * ```
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      direction,
      spacing,
      align,
      justify,
      wrap,
      as: Component = 'div',
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          stackVariants({ direction, spacing, align, justify, wrap }),
          className
        )}
        {...props}
      />
    );
  }
);

Stack.displayName = 'Stack';

/**
 * HStack Component
 *
 * Horizontal stack (shorthand for Stack with direction="row").
 *
 * @example
 * ```tsx
 * <HStack spacing={3} align="center">
 *   <Button>Cancel</Button>
 *   <Button variant="accent">Submit</Button>
 * </HStack>
 * ```
 */
export const HStack = React.forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  ({ ...props }, ref) => {
    return <Stack ref={ref} direction="row" {...props} />;
  }
);

HStack.displayName = 'HStack';

/**
 * VStack Component
 *
 * Vertical stack (shorthand for Stack with direction="column").
 *
 * @example
 * ```tsx
 * <VStack spacing={4}>
 *   <Input label="Name" />
 *   <Input label="Email" />
 *   <Button>Submit</Button>
 * </VStack>
 * ```
 */
export const VStack = React.forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  ({ ...props }, ref) => {
    return <Stack ref={ref} direction="column" {...props} />;
  }
);

VStack.displayName = 'VStack';

/**
 * Divider Component
 *
 * Visual divider for Stack components.
 *
 * @example
 * ```tsx
 * <VStack>
 *   <div>Section 1</div>
 *   <Divider />
 *   <div>Section 2</div>
 * </VStack>
 * ```
 */
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation of the divider */
  orientation?: 'horizontal' | 'vertical';
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="separator"
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

Divider.displayName = 'Divider';
