import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import React from 'react';

import { cn } from '../lib/utils';

const buttonVariants = cva(
  // Base styles - following Material Design 3 and iOS HIG principles
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap',
  {
    variants: {
      variant: {
        // Primary - Dark background (60% of design)
        primary:
          'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500 active:scale-95 shadow-sm hover:shadow-md',
        // Accent - Green for CTAs (10% of design - used sparingly)
        accent:
          'bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-500 active:scale-95 shadow-sm hover:shadow-md',
        // Secondary - Charcoal background (30% of design)
        secondary:
          'bg-secondary-500 text-neutral-100 hover:bg-secondary-600 focus-visible:ring-secondary-500 active:scale-95 shadow-sm hover:shadow-md',
        // Outline - Border only
        outline:
          'border-2 border-primary-600 text-primary-600 bg-white hover:bg-primary-50 focus-visible:ring-primary-500 active:scale-95',
        // Ghost - Transparent background
        ghost:
          'text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-500 active:scale-95',
        // Destructive - For delete actions
        destructive:
          'bg-error-500 text-white hover:bg-error-600 focus-visible:ring-error-500 active:scale-95 shadow-sm hover:shadow-md',
        // Link - Text only
        link:
          'text-accent-600 underline-offset-4 hover:underline focus-visible:ring-accent-500',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-5 text-base',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-11 w-11',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Show loading state with spinner */
  isLoading?: boolean;
  /** Icon to show on the left */
  leftIcon?: React.ReactNode;
  /** Icon to show on the right */
  rightIcon?: React.ReactNode;
  /** Loading text to show when isLoading is true */
  loadingText?: string;
  /** Screen reader label for better accessibility */
  'aria-label'?: string;
}

/**
 * Button Component
 *
 * A versatile button component with multiple variants, sizes, and states.
 * Follows Material Design 3 and iOS Human Interface Guidelines.
 *
 * @example
 * ```tsx
 * <Button variant="accent" size="md">
 *   Click me
 * </Button>
 *
 * <Button variant="primary" isLoading loadingText="Saving...">
 *   Save
 * </Button>
 *
 * <Button variant="outline" leftIcon={<Icon />}>
 *   With Icon
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      isLoading,
      leftIcon,
      rightIcon,
      loadingText,
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        type={type}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2
              className={cn('h-4 w-4 animate-spin', loadingText || children ? 'mr-2' : '')}
              aria-hidden="true"
            />
            {loadingText || children}
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="mr-2 flex items-center" aria-hidden="true">
                {leftIcon}
              </span>
            )}
            {children}
            {rightIcon && (
              <span className="ml-2 flex items-center" aria-hidden="true">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

/**
 * Button Group Component
 * Groups multiple buttons together with proper spacing
 *
 * @example
 * ```tsx
 * <ButtonGroup>
 *   <Button>First</Button>
 *   <Button>Second</Button>
 *   <Button>Third</Button>
 * </ButtonGroup>
 * ```
 */
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Spacing between buttons */
  spacing?: 'sm' | 'md' | 'lg';
  /** Vertical or horizontal orientation */
  orientation?: 'horizontal' | 'vertical';
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, spacing = 'md', orientation = 'horizontal', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex',
          orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col items-stretch',
          {
            'gap-1': spacing === 'sm',
            'gap-2': spacing === 'md',
            'gap-4': spacing === 'lg',
          },
          className
        )}
        role="group"
        {...props}
      >
        {children}
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

/**
 * Icon Button Component
 * A button that only contains an icon, with proper accessibility
 *
 * @example
 * ```tsx
 * <IconButton icon={<CloseIcon />} aria-label="Close dialog" />
 * ```
 */
export interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon'> {
  /** Icon to display */
  icon: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className, ...props }, ref) => {
    return (
      <Button ref={ref} size="icon" className={className} {...props}>
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = 'IconButton';
