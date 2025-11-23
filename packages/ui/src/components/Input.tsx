import React from 'react';

import { cn } from '../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label for the input */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text to display below input */
  helperText?: string;
  /** Icon to display on the left */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right */
  rightIcon?: React.ReactNode;
  /** Additional class for the container */
  containerClassName?: string;
}

/**
 * Input Component
 *
 * A comprehensive input field with label, error states, icons, and helper text.
 * Follows Material Design 3 and iOS Human Interface Guidelines.
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   helperText="We'll never share your email"
 * />
 *
 * <Input
 *   label="Search"
 *   leftIcon={<SearchIcon />}
 *   placeholder="Search..."
 * />
 *
 * <Input
 *   label="Password"
 *   type="password"
 *   error="Password is required"
 *   required
 * />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      type = 'text',
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      disabled,
      required,
      id,
      name,
      ...props
    },
    ref
  ) => {
    const inputId = id || name;

    return (
      <div className={cn('w-full', containerClassName)}>
        {label && (
          <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-primary-900">
            {label}
            {required && (
              <span className="ml-1 text-error-500" aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-600">
              {leftIcon}
            </div>
          )}

          <input
            type={type}
            id={inputId}
            name={name}
            className={cn(
              'block w-full rounded-lg border-2 bg-white px-4 py-3 text-base text-primary-900 transition-all duration-300',
              'placeholder:text-neutral-500',
              'focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20',
              'disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-600',
              error
                ? 'border-error-500 focus:border-error-500 focus:ring-error-500/20'
                : 'border-neutral-400 hover:border-neutral-500',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            ref={ref}
            disabled={disabled}
            required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />

          {rightIcon && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-600">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-2 animate-slide-down text-sm text-error-500"
            role="alert"
          >
            {error}
          </p>
        )}

        {!error && helperText && (
          <p id={`${inputId}-helper`} className="mt-2 text-sm text-neutral-600">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
