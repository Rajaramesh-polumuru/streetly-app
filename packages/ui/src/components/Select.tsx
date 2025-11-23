import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';

import { cn } from '../lib/utils';

export interface SelectProps {
  /** Label for the select */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text to display below select */
  helperText?: string;
  /** Additional class for the container */
  containerClassName?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Default value */
  defaultValue?: string;
  /** Change handler */
  onValueChange?: (value: string) => void;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Whether the select is required */
  required?: boolean;
  /** Unique identifier */
  id?: string;
  /** Name attribute */
  name?: string;
  /** Select options as children */
  children: React.ReactNode;
}

/**
 * Select Component
 *
 * A dropdown select component using Radix UI with custom styling.
 * Provides full keyboard navigation and ARIA support.
 *
 * @example
 * ```tsx
 * <Select
 *   label="Category"
 *   placeholder="Select a category"
 *   value={category}
 *   onValueChange={setCategory}
 * >
 *   <SelectItem value="appetizer">Appetizer</SelectItem>
 *   <SelectItem value="main">Main Course</SelectItem>
 *   <SelectItem value="dessert">Dessert</SelectItem>
 * </Select>
 * ```
 */
export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      containerClassName,
      placeholder,
      value,
      defaultValue,
      onValueChange,
      disabled,
      required,
      id,
      name,
      children,
    },
    ref
  ) => {
    const selectId = id || name;

    return (
      <div className={cn('w-full', containerClassName)}>
        {label && (
          <label htmlFor={selectId} className="mb-2 block text-sm font-medium text-primary-900">
            {label}
            {required && (
              <span className="ml-1 text-error-500" aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        <SelectPrimitive.Root
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          disabled={disabled}
          name={name}
        >
          <SelectPrimitive.Trigger
            ref={ref}
            id={selectId}
            className={cn(
              'flex h-11 w-full items-center justify-between rounded-lg border-2 bg-white px-4 py-3 text-base text-primary-900 transition-all duration-300',
              'focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20',
              'disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-600',
              'data-[placeholder]:text-neutral-500',
              error
                ? 'border-error-500 focus:border-error-500 focus:ring-error-500/20'
                : 'border-neutral-400 hover:border-neutral-500'
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
            }
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon asChild>
              <ChevronDown className="h-4 w-4 text-neutral-600" />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              className={cn(
                'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border-2 border-neutral-400 bg-white text-primary-900 shadow-lg',
                'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
              )}
              position="popper"
              sideOffset={5}
            >
              <SelectPrimitive.ScrollUpButton className="flex cursor-default items-center justify-center py-1">
                <ChevronUp className="h-4 w-4" />
              </SelectPrimitive.ScrollUpButton>
              <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
              <SelectPrimitive.ScrollDownButton className="flex cursor-default items-center justify-center py-1">
                <ChevronDown className="h-4 w-4" />
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>

        {error && (
          <p
            id={`${selectId}-error`}
            className="mt-2 animate-slide-down text-sm text-error-500"
            role="alert"
          >
            {error}
          </p>
        )}

        {!error && helperText && (
          <p id={`${selectId}-helper`} className="mt-2 text-sm text-neutral-600">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

/**
 * Select Item Component
 *
 * Individual item in the select dropdown.
 *
 * @example
 * ```tsx
 * <SelectItem value="option1">Option 1</SelectItem>
 * ```
 */
export interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  children: React.ReactNode;
}

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none transition-colors duration-200',
      'focus:bg-accent-100 focus:text-accent-900',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 text-accent-600" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

SelectItem.displayName = 'SelectItem';

/**
 * Select Group Component
 *
 * Groups select items with an optional label.
 *
 * @example
 * ```tsx
 * <SelectGroup label="Fruits">
 *   <SelectItem value="apple">Apple</SelectItem>
 *   <SelectItem value="banana">Banana</SelectItem>
 * </SelectGroup>
 * ```
 */
export interface SelectGroupProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group> {
  label?: string;
  children: React.ReactNode;
}

export const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  SelectGroupProps
>(({ className, label, children, ...props }, ref) => (
  <SelectPrimitive.Group ref={ref} className={cn('py-1', className)} {...props}>
    {label && (
      <SelectPrimitive.Label className="px-2 py-1.5 text-xs font-semibold text-neutral-600">
        {label}
      </SelectPrimitive.Label>
    )}
    {children}
  </SelectPrimitive.Group>
));

SelectGroup.displayName = 'SelectGroup';

/**
 * Select Separator Component
 *
 * Visual separator between select items.
 */
export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-neutral-300', className)}
    {...props}
  />
));

SelectSeparator.displayName = 'SelectSeparator';
