import * as PopoverPrimitive from '@radix-ui/react-popover';
import React from 'react';

import { cn } from '../lib/utils';

/**
 * Popover Component
 *
 * A popover using Radix UI with custom styling.
 * Perfect for displaying rich content in a floating panel.
 *
 * @example
 * ```tsx
 * <Popover>
 *   <PopoverTrigger asChild>
 *     <Button variant="outline">Open Popover</Button>
 *   </PopoverTrigger>
 *   <PopoverContent>
 *     <div className="space-y-2">
 *       <h3 className="font-semibold">Dimensions</h3>
 *       <p className="text-sm">Set the dimensions for the layer.</p>
 *     </div>
 *   </PopoverContent>
 * </Popover>
 * ```
 */
export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverAnchor = PopoverPrimitive.Anchor;

export const PopoverClose = PopoverPrimitive.Close;

/**
 * PopoverContent Component
 *
 * Container for popover content.
 */
export interface PopoverContentProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  /** Whether to show arrow */
  showArrow?: boolean;
}

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, align = 'center', sideOffset = 4, showArrow = true, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-72 rounded-lg border-2 border-neutral-400 bg-white p-4 text-primary-900 shadow-lg outline-none',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    >
      {props.children}
      {showArrow && <PopoverPrimitive.Arrow className="fill-neutral-400" />}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = 'PopoverContent';

/**
 * PopoverHeader Component
 *
 * Header section for popover.
 */
export const PopoverHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mb-3 flex flex-col space-y-1', className)}
    {...props}
  />
));
PopoverHeader.displayName = 'PopoverHeader';

/**
 * PopoverTitle Component
 *
 * Title for popover.
 */
export const PopoverTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-lg font-semibold text-primary-900', className)}
    {...props}
  >
    {children}
  </h3>
));
PopoverTitle.displayName = 'PopoverTitle';

/**
 * PopoverDescription Component
 *
 * Description for popover.
 */
export const PopoverDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-neutral-600', className)}
    {...props}
  />
));
PopoverDescription.displayName = 'PopoverDescription';

/**
 * PopoverFooter Component
 *
 * Footer section for popover actions.
 */
export const PopoverFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mt-3 flex items-center justify-end gap-2', className)}
    {...props}
  />
));
PopoverFooter.displayName = 'PopoverFooter';
