import * as SwitchPrimitive from '@radix-ui/react-switch';
import React from 'react';

import { cn } from '../lib/utils';

export interface SwitchProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, 'children'> {
  /** Label for the switch */
  label?: string;
  /** Description text */
  description?: string;
  /** Error message to display */
  error?: string;
  /** Additional class for the container */
  containerClassName?: string;
}

/**
 * Switch Component
 *
 * A toggle switch using Radix UI with custom styling.
 * Supports keyboard navigation and proper ARIA attributes.
 *
 * @example
 * ```tsx
 * <Switch
 *   label="Enable notifications"
 *   description="Receive notifications about your orders"
 *   checked={enabled}
 *   onCheckedChange={setEnabled}
 * />
 *
 * <Switch
 *   label="Dark mode"
 *   checked={darkMode}
 *   onCheckedChange={setDarkMode}
 * />
 * ```
 */
export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  (
    { className, containerClassName, label, description, error, id, name, disabled, ...props },
    ref
  ) => {
    const switchId = id || name;

    return (
      <div className={cn('flex flex-col', containerClassName)}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {label && (
              <label
                htmlFor={switchId}
                className={cn(
                  'block text-sm font-medium text-primary-900',
                  disabled && 'cursor-not-allowed opacity-50'
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <p className={cn('mt-1 text-xs text-neutral-600', disabled && 'opacity-50')}>
                {description}
              </p>
            )}
          </div>

          <SwitchPrimitive.Root
            ref={ref}
            id={switchId}
            name={name}
            disabled={disabled}
            className={cn(
              'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all duration-300',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              'data-[state=checked]:bg-accent-500 data-[state=unchecked]:bg-neutral-400',
              error && 'data-[state=unchecked]:bg-error-500',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${switchId}-error` : undefined}
            {...props}
          >
            <SwitchPrimitive.Thumb
              className={cn(
                'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-300',
                'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
              )}
            />
          </SwitchPrimitive.Root>
        </div>

        {error && (
          <p
            id={`${switchId}-error`}
            className="mt-2 animate-slide-down text-sm text-error-500"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
