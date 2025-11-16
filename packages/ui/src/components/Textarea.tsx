import React from 'react';
import { cn } from '../lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label for the textarea */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text to display below textarea */
  helperText?: string;
  /** Additional class for the container */
  containerClassName?: string;
  /** Number of rows (default: 4) */
  rows?: number;
}

/**
 * Textarea Component
 *
 * A multi-line text input with label, error states, and helper text.
 * Follows Material Design 3 and iOS Human Interface Guidelines.
 *
 * @example
 * ```tsx
 * <Textarea
 *   label="Description"
 *   placeholder="Enter description"
 *   helperText="Maximum 500 characters"
 *   rows={5}
 * />
 *
 * <Textarea
 *   label="Comments"
 *   error="This field is required"
 *   required
 * />
 * ```
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      containerClassName,
      label,
      error,
      helperText,
      disabled,
      required,
      id,
      name,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textareaId = id || name;

    return (
      <div className={cn('w-full', containerClassName)}>
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-2 block text-sm font-medium text-primary-900"
          >
            {label}
            {required && <span className="ml-1 text-error-500" aria-label="required">*</span>}
          </label>
        )}

        <textarea
          id={textareaId}
          name={name}
          rows={rows}
          className={cn(
            'block w-full rounded-lg border-2 bg-white px-4 py-3 text-base text-primary-900 transition-all duration-300',
            'placeholder:text-neutral-500',
            'focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20',
            'disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-600',
            'resize-y',
            error
              ? 'border-error-500 focus:border-error-500 focus:ring-error-500/20'
              : 'border-neutral-400 hover:border-neutral-500',
            className
          )}
          ref={ref}
          disabled={disabled}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          {...props}
        />

        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-2 animate-slide-down text-sm text-error-500"
            role="alert"
          >
            {error}
          </p>
        )}

        {!error && helperText && (
          <p
            id={`${textareaId}-helper`}
            className="mt-2 text-sm text-neutral-600"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
