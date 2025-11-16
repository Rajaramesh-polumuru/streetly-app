import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import React from 'react';

import { cn } from '../lib/utils';

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  /** Label for the radio group */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text to display below radio group */
  helperText?: string;
  /** Additional class for the container */
  containerClassName?: string;
  /** Orientation of radio items */
  orientation?: 'horizontal' | 'vertical';
  /** Children (RadioItem components) */
  children: React.ReactNode;
}

/**
 * RadioGroup Component
 *
 * A radio group using Radix UI with custom styling.
 * Supports keyboard navigation and proper ARIA attributes.
 *
 * @example
 * ```tsx
 * <RadioGroup
 *   label="Size"
 *   value={size}
 *   onValueChange={setSize}
 *   orientation="horizontal"
 * >
 *   <RadioItem value="small" label="Small" />
 *   <RadioItem value="medium" label="Medium" />
 *   <RadioItem value="large" label="Large" />
 * </RadioGroup>
 * ```
 */
export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(
  (
    {
      className,
      containerClassName,
      label,
      error,
      helperText,
      orientation = 'vertical',
      children,
      id,
      name,
      required,
      ...props
    },
    ref
  ) => {
    const radioGroupId = id || name;

    return (
      <div className={cn('w-full', containerClassName)}>
        {label && (
          <label
            htmlFor={radioGroupId}
            className="mb-3 block text-sm font-medium text-primary-900"
          >
            {label}
            {required && <span className="ml-1 text-error-500" aria-label="required">*</span>}
          </label>
        )}

        <RadioGroupPrimitive.Root
          ref={ref}
          id={radioGroupId}
          name={name}
          required={required}
          className={cn(
            'flex',
            orientation === 'horizontal' ? 'flex-row flex-wrap gap-4' : 'flex-col gap-3',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${radioGroupId}-error` : helperText ? `${radioGroupId}-helper` : undefined
          }
          {...props}
        >
          {children}
        </RadioGroupPrimitive.Root>

        {error && (
          <p
            id={`${radioGroupId}-error`}
            className="mt-2 animate-slide-down text-sm text-error-500"
            role="alert"
          >
            {error}
          </p>
        )}

        {!error && helperText && (
          <p
            id={`${radioGroupId}-helper`}
            className="mt-2 text-sm text-neutral-600"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

/**
 * RadioItem Component
 *
 * Individual radio item in a radio group.
 *
 * @example
 * ```tsx
 * <RadioItem value="option1" label="Option 1" />
 * <RadioItem value="option2" label="Option 2" description="Additional info" />
 * ```
 */
export interface RadioItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  /** Label for the radio item */
  label: string;
  /** Optional description */
  description?: string;
}

export const RadioItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioItemProps
>(({ className, label, description, id, ...props }, ref) => {
  const radioId = id || `radio-${props.value}`;

  return (
    <div className="flex items-start">
      <RadioGroupPrimitive.Item
        ref={ref}
        id={radioId}
        className={cn(
          'peer h-5 w-5 shrink-0 rounded-full border-2 transition-all duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'data-[state=checked]:border-accent-500',
          'border-neutral-400 hover:border-neutral-500',
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-3 w-3 fill-accent-500 text-accent-500" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>

      <div className="ml-3 flex flex-col">
        <label
          htmlFor={radioId}
          className={cn(
            'cursor-pointer text-sm font-medium text-primary-900',
            'peer-disabled:cursor-not-allowed peer-disabled:opacity-50'
          )}
        >
          {label}
        </label>
        {description && (
          <span className="text-xs text-neutral-600 peer-disabled:opacity-50">
            {description}
          </span>
        )}
      </div>
    </div>
  );
});

RadioItem.displayName = 'RadioItem';
