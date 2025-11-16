import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const drawerVariants = cva(
  'fixed z-50 bg-white shadow-lg transition-all duration-300',
  {
    variants: {
      side: {
        left: 'inset-y-0 left-0 h-full w-3/4 max-w-sm border-r-2 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-md',
        right: 'inset-y-0 right-0 h-full w-3/4 max-w-sm border-l-2 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-md',
        top: 'inset-x-0 top-0 h-auto max-h-[85vh] w-full border-b-2 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom: 'inset-x-0 bottom-0 h-auto max-h-[85vh] w-full border-t-2 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

export interface DrawerProps {
  /** Whether the drawer is open */
  open?: boolean;
  /** Default open state */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Drawer content */
  children: React.ReactNode;
}

/**
 * Drawer Component
 *
 * A side drawer/panel using Radix Dialog with custom positioning.
 * Perfect for shopping carts, filters, and navigation menus.
 *
 * @example
 * ```tsx
 * <Drawer open={isOpen} onOpenChange={setIsOpen}>
 *   <DrawerTrigger asChild>
 *     <Button>Open Drawer</Button>
 *   </DrawerTrigger>
 *   <DrawerContent side="right">
 *     <DrawerHeader>
 *       <DrawerTitle>Shopping Cart</DrawerTitle>
 *       <DrawerDescription>3 items in your cart</DrawerDescription>
 *     </DrawerHeader>
 *     <div className="p-4">Drawer content...</div>
 *     <DrawerFooter>
 *       <Button fullWidth>Checkout</Button>
 *     </DrawerFooter>
 *   </DrawerContent>
 * </Drawer>
 * ```
 */
export const Drawer = DialogPrimitive.Root;

export const DrawerTrigger = DialogPrimitive.Trigger;

export const DrawerPortal = DialogPrimitive.Portal;

export const DrawerClose = DialogPrimitive.Close;

/**
 * DrawerOverlay Component
 *
 * Backdrop overlay for the drawer.
 */
export const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
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
DrawerOverlay.displayName = 'DrawerOverlay';

/**
 * DrawerContent Component
 *
 * Main content container for the drawer.
 */
export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof drawerVariants> {
  /** Whether to show the close button */
  showClose?: boolean;
}

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(({ side = 'right', className, children, showClose = true, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        drawerVariants({ side }),
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'border-neutral-300',
        className
      )}
      {...props}
    >
      <div className="flex h-full flex-col overflow-hidden">
        {children}
      </div>
      {showClose && (
        <DialogPrimitive.Close
          className={cn(
            'absolute right-4 top-4 rounded-lg p-1.5 transition-colors duration-200',
            'text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900',
            'focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
            'disabled:pointer-events-none'
          )}
          aria-label="Close drawer"
        >
          <X className="h-4 w-4" />
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = 'DrawerContent';

/**
 * DrawerHeader Component
 *
 * Header section of the drawer.
 */
export const DrawerHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-2 border-b-2 border-neutral-300 p-4', className)}
    {...props}
  />
));
DrawerHeader.displayName = 'DrawerHeader';

/**
 * DrawerBody Component
 *
 * Scrollable body section of the drawer.
 */
export const DrawerBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex-1 overflow-y-auto p-4', className)}
    {...props}
  />
));
DrawerBody.displayName = 'DrawerBody';

/**
 * DrawerFooter Component
 *
 * Footer section of the drawer for actions.
 */
export const DrawerFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('border-t-2 border-neutral-300 p-4', className)}
    {...props}
  />
));
DrawerFooter.displayName = 'DrawerFooter';

/**
 * DrawerTitle Component
 *
 * Title of the drawer.
 */
export const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-xl font-bold text-primary-900', className)}
    {...props}
  />
));
DrawerTitle.displayName = 'DrawerTitle';

/**
 * DrawerDescription Component
 *
 * Description of the drawer.
 */
export const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-neutral-600', className)}
    {...props}
  />
));
DrawerDescription.displayName = 'DrawerDescription';
