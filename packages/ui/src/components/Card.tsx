import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '../lib/utils';

const cardVariants = cva('rounded-xl bg-white transition-all duration-300', {
  variants: {
    variant: {
      default: 'shadow-sm hover:shadow-md',
      elevated: 'shadow-lg hover:shadow-xl',
      outlined: 'border-2 border-neutral-400 hover:border-accent-500',
    },
    padding: {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

/**
 * Card Component
 *
 * A flexible card container with multiple variants and padding options.
 * Follows Material Design 3 elevation system.
 *
 * @example
 * ```tsx
 * <Card variant="default" padding="md">
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *   </CardHeader>
 *   <CardContent>
 *     Card content goes here
 *   </CardContent>
 * </Card>
 * ```
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardVariants({ variant, padding, className }))} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * Card Header Component
 * Container for card title and description
 */
export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-4 flex flex-col space-y-1.5', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

/**
 * Card Title Component
 * Main heading for the card
 */
export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3 ref={ref} className={cn('text-2xl font-bold text-primary-900', className)} {...props}>
    {children}
  </h3>
));
CardTitle.displayName = 'CardTitle';

/**
 * Card Description Component
 * Subtitle or description text for the card
 */
export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-neutral-600', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

/**
 * Card Content Component
 * Main content area of the card
 */
export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-primary-700', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

/**
 * Card Footer Component
 * Footer section for actions or additional information
 */
export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mt-4 flex items-center justify-between', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';
