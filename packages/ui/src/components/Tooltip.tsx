import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React from 'react';

import { cn } from '../lib/utils';

export interface TooltipProps {
  /** Tooltip content */
  content: React.ReactNode;
  /** Element that triggers the tooltip */
  children: React.ReactNode;
  /** Side to display tooltip */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /** Alignment of tooltip */
  align?: 'start' | 'center' | 'end';
  /** Delay before showing (ms) */
  delayDuration?: number;
  /** Whether tooltip is disabled */
  disabled?: boolean;
}

/**
 * TooltipProvider Component
 *
 * Provides context for tooltips. Wrap your app or component tree with this.
 */
export const TooltipProvider = TooltipPrimitive.Provider;

/**
 * Tooltip Component
 *
 * A tooltip using Radix UI with custom styling.
 * Provides helpful information on hover or focus.
 *
 * @example
 * ```tsx
 * <Tooltip content="Click to copy">
 *   <Button variant="ghost" size="icon">
 *     <CopyIcon />
 *   </Button>
 * </Tooltip>
 *
 * <Tooltip content="Profile settings" side="right" delayDuration={300}>
 *   <IconButton icon={<SettingsIcon />} />
 * </Tooltip>
 * ```
 */
export const Tooltip = ({
  content,
  children,
  side = 'top',
  align = 'center',
  delayDuration = 200,
  disabled = false,
  ...props
}: TooltipProps) => {
  if (disabled) {
    return <>{children}</>;
  }

  return (
    <TooltipPrimitive.Root delayDuration={delayDuration}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          align={align}
          sideOffset={5}
          className={cn(
            'z-50 overflow-hidden rounded-lg bg-primary-900 px-3 py-2 text-sm text-white shadow-lg',
            'animate-in fade-in-0 zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
            'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
          )}
          {...props}
        >
          {content}
          <TooltipPrimitive.Arrow className="fill-primary-900" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};

Tooltip.displayName = 'Tooltip';

/**
 * TooltipContent Component
 *
 * Standalone tooltip content component for custom usage.
 */
export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 5, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-lg bg-primary-900 px-3 py-2 text-sm text-white shadow-lg',
      'animate-in fade-in-0 zoom-in-95',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = 'TooltipContent';

export const TooltipTrigger = TooltipPrimitive.Trigger;
