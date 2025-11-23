import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '../lib/utils';

const containerVariants = cva('mx-auto w-full px-4 sm:px-6 lg:px-8', {
  variants: {
    maxWidth: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
    },
    padding: {
      none: 'px-0',
      sm: 'px-4',
      md: 'px-4 sm:px-6',
      lg: 'px-4 sm:px-6 lg:px-8',
    },
  },
  defaultVariants: {
    maxWidth: 'xl',
    padding: 'lg',
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  /** Custom element type */
  as?: React.ElementType;
}

/**
 * Container Component
 *
 * A responsive container with configurable max-width and padding.
 * Centers content and provides consistent horizontal spacing.
 *
 * @example
 * ```tsx
 * <Container>
 *   <h1>Page Content</h1>
 * </Container>
 *
 * <Container maxWidth="lg">
 *   <p>Narrower content</p>
 * </Container>
 *
 * <Container as="section" maxWidth="2xl" padding="md">
 *   <div>Custom container</div>
 * </Container>
 * ```
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth, padding, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(containerVariants({ maxWidth, padding }), className)}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

/**
 * Section Component
 *
 * A semantic section container with consistent vertical spacing.
 *
 * @example
 * ```tsx
 * <Section>
 *   <h2>Section Title</h2>
 *   <p>Section content</p>
 * </Section>
 * ```
 */
export interface SectionProps extends ContainerProps {
  /** Vertical padding */
  py?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, py = 'lg', as = 'section', ...props }, ref) => {
    return (
      <Container
        ref={ref}
        as={as}
        className={cn(
          {
            'py-0': py === 'none',
            'py-4': py === 'sm',
            'py-8 sm:py-12': py === 'md',
            'py-12 sm:py-16': py === 'lg',
            'py-16 sm:py-24': py === 'xl',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Section.displayName = 'Section';
