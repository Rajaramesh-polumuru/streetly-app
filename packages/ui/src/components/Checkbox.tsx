import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

export interface CheckboxProps extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'children'> {
  /** Label for the checkbox */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text to display below checkbox */
  helperText?: string;
  /** Additional class for the container */
  containerClassName?: string;
}

/**
 * Checkbox Component
 *
 * A checkbox input using Radix UI with custom styling.
 * Supports keyboard navigation and proper ARIA attributes.
 *
 * @example
 * ```tsx
 * <Checkbox
 *   label="Accept terms and conditions"
 *   checked={accepted}
 *   onCheckedChange={setAccepted}
 *   required
 * />
 *
 * <Checkbox
 *   label="Subscribe to newsletter"
 *   helperText="You can unsubscribe at any time"
 * />
 *
 * <Checkbox
 *   label="Enable notifications"
 *   error="This field is required"
 * />
 * ```
 */
export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      containerClassName,
      label,
      error,
      helperText,
      id,
      name,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || name;

    return (
      <div className={cn('flex flex-col', containerClassName)}>
        <div className="flex items-start">
          <CheckboxPrimitive.Root
            ref={ref}
            id={checkboxId}
            name={name}
            disabled={disabled}
            required={required}
            className={cn(
              'peer h-5 w-5 shrink-0 rounded border-2 transition-all duration-300',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              'data-[state=checked]:bg-accent-500 data-[state=checked]:border-accent-500 data-[state=checked]:text-white',
              error
                ? 'border-error-500'
                : 'border-neutral-400 hover:border-neutral-500',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${checkboxId}-error` : helperText ? `${checkboxId}-helper` : undefined
            }
            {...props}
          >
            <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
              <Check className="h-4 w-4" strokeWidth={3} />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>

          {label && (
            <label
              htmlFor={checkboxId}
              className={cn(
                'ml-3 cursor-pointer text-sm font-medium text-primary-900',
                'peer-disabled:cursor-not-allowed peer-disabled:opacity-50'
              )}
            >
              {label}
              {required && <span className="ml-1 text-error-500" aria-label="required">*</span>}
            </label>
          )}
        </div>

        {error && (
          <p
            id={`${checkboxId}-error`}
            className="mt-2 animate-slide-down text-sm text-error-500"
            role="alert"
          >
            {error}
          </p>
        )}

        {!error && helperText && (
          <p
            id={`${checkboxId}-helper`}
            className="mt-2 text-sm text-neutral-600"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
