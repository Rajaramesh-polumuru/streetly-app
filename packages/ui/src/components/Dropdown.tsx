import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import React from 'react';

import { cn } from '../lib/utils';

/**
 * Dropdown Component
 *
 * A dropdown menu using Radix UI with custom styling.
 * Supports sub-menus, checkboxes, radio items, and keyboard navigation.
 *
 * @example
 * ```tsx
 * <Dropdown>
 *   <DropdownTrigger asChild>
 *     <Button variant="outline">Open Menu</Button>
 *   </DropdownTrigger>
 *   <DropdownContent>
 *     <DropdownLabel>My Account</DropdownLabel>
 *     <DropdownSeparator />
 *     <DropdownItem>Profile</DropdownItem>
 *     <DropdownItem>Settings</DropdownItem>
 *     <DropdownSeparator />
 *     <DropdownItem>Logout</DropdownItem>
 *   </DropdownContent>
 * </Dropdown>
 * ```
 */
export const Dropdown = DropdownMenuPrimitive.Root;

export const DropdownTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownGroup = DropdownMenuPrimitive.Group;

export const DropdownPortal = DropdownMenuPrimitive.Portal;

export const DropdownSub = DropdownMenuPrimitive.Sub;

export const DropdownRadioGroup = DropdownMenuPrimitive.RadioGroup;

/**
 * DropdownSubTrigger Component
 *
 * Trigger for a submenu.
 */
export const DropdownSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm outline-none transition-colors duration-200',
      'focus:bg-accent-100 focus:text-accent-900',
      'data-[state=open]:bg-accent-100',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownSubTrigger.displayName = 'DropdownSubTrigger';

/**
 * DropdownSubContent Component
 *
 * Content of a submenu.
 */
export const DropdownSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-lg border-2 border-neutral-400 bg-white p-1 text-primary-900 shadow-lg',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
DropdownSubContent.displayName = 'DropdownSubContent';

/**
 * DropdownContent Component
 *
 * Container for dropdown menu items.
 */
export const DropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-lg border-2 border-neutral-400 bg-white p-1 text-primary-900 shadow-lg',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownContent.displayName = 'DropdownContent';

/**
 * DropdownItem Component
 *
 * Individual menu item.
 */
export const DropdownItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm outline-none transition-colors duration-200',
      'focus:bg-accent-100 focus:text-accent-900',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
DropdownItem.displayName = 'DropdownItem';

/**
 * DropdownCheckboxItem Component
 *
 * Menu item with checkbox.
 */
export const DropdownCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none transition-colors duration-200',
      'focus:bg-accent-100 focus:text-accent-900',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4 text-accent-600" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownCheckboxItem.displayName = 'DropdownCheckboxItem';

/**
 * DropdownRadioItem Component
 *
 * Menu item with radio button.
 */
export const DropdownRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none transition-colors duration-200',
      'focus:bg-accent-100 focus:text-accent-900',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-accent-600 text-accent-600" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownRadioItem.displayName = 'DropdownRadioItem';

/**
 * DropdownLabel Component
 *
 * Label for a group of menu items.
 */
export const DropdownLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-xs font-semibold text-neutral-600', inset && 'pl-8', className)}
    {...props}
  />
));
DropdownLabel.displayName = 'DropdownLabel';

/**
 * DropdownSeparator Component
 *
 * Visual separator between menu items.
 */
export const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-neutral-300', className)}
    {...props}
  />
));
DropdownSeparator.displayName = 'DropdownSeparator';

/**
 * DropdownShortcut Component
 *
 * Keyboard shortcut display.
 */
export const DropdownShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest text-neutral-600', className)}
      {...props}
    />
  );
};
DropdownShortcut.displayName = 'DropdownShortcut';
