import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { cn } from '../lib/utils';

/**
 * AlertDialog Component
 *
 * A confirmation dialog using Radix UI with custom styling.
 * Use for important confirmations and destructive actions.
 *
 * @example
 * ```tsx
 * <AlertDialog>
 *   <AlertDialogTrigger asChild>
 *     <Button variant="destructive">Delete Account</Button>
 *   </AlertDialogTrigger>
 *   <AlertDialogContent>
 *     <AlertDialogHeader>
 *       <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
 *       <AlertDialogDescription>
 *         This action cannot be undone. This will permanently delete your account.
 *       </AlertDialogDescription>
 *     </AlertDialogHeader>
 *     <AlertDialogFooter>
 *       <AlertDialogCancel>Cancel</AlertDialogCancel>
 *       <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
 *     </AlertDialogFooter>
 *   </AlertDialogContent>
 * </AlertDialog>
 * ```
 */
export const AlertDialog = AlertDialogPrimitive.Root;

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export const AlertDialogPortal = AlertDialogPrimitive.Portal;

/**
 * AlertDialogOverlay Component
 *
 * Backdrop overlay for the alert dialog.
 */
export const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-primary-900/80 backdrop-blur-sm',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
));
AlertDialogOverlay.displayName = 'AlertDialogOverlay';

/**
 * AlertDialogContent Component
 *
 * Main content container for the alert dialog.
 */
export const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border-2 border-neutral-300 bg-white p-6 shadow-lg',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
        'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = 'AlertDialogContent';

/**
 * AlertDialogHeader Component
 *
 * Header section of the alert dialog.
 */
export const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-2 text-left', className)}
    {...props}
  />
));
AlertDialogHeader.displayName = 'AlertDialogHeader';

/**
 * AlertDialogFooter Component
 *
 * Footer section of the alert dialog for actions.
 */
export const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
    {...props}
  />
));
AlertDialogFooter.displayName = 'AlertDialogFooter';

/**
 * AlertDialogTitle Component
 *
 * Title of the alert dialog.
 */
export const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-2xl font-bold text-primary-900', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = 'AlertDialogTitle';

/**
 * AlertDialogDescription Component
 *
 * Description of the alert dialog.
 */
export const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-neutral-600', className)}
    {...props}
  />
));
AlertDialogDescription.displayName = 'AlertDialogDescription';

/**
 * AlertDialogAction Component
 *
 * Primary action button (usually destructive).
 */
export const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(
      'inline-flex h-11 items-center justify-center rounded-lg bg-error-500 px-5 text-base font-medium text-white transition-all duration-300',
      'hover:bg-error-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-error-500 focus-visible:ring-offset-2',
      'active:scale-95 disabled:pointer-events-none disabled:opacity-50',
      'shadow-sm hover:shadow-md',
      className
    )}
    {...props}
  />
));
AlertDialogAction.displayName = 'AlertDialogAction';

/**
 * AlertDialogCancel Component
 *
 * Cancel button.
 */
export const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      'inline-flex h-11 items-center justify-center rounded-lg border-2 border-primary-600 bg-white px-5 text-base font-medium text-primary-600 transition-all duration-300',
      'hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
      'active:scale-95 disabled:pointer-events-none disabled:opacity-50',
      className
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = 'AlertDialogCancel';
