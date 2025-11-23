import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cva, type VariantProps } from 'class-variance-authority';
import { User } from 'lucide-react';
import React from 'react';

import { cn, getInitials } from '../lib/utils';

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full transition-all duration-300',
  {
    variants: {
      size: {
        sm: 'h-8 w-8',
        md: 'h-12 w-12',
        lg: 'h-16 w-16',
        xl: 'h-24 w-24',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  /** Image source URL */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Name to generate initials from */
  name?: string;
  /** Custom fallback content */
  fallback?: React.ReactNode;
  /** Whether to show online indicator */
  online?: boolean;
}

/**
 * Avatar Component
 *
 * A user avatar using Radix UI with automatic fallback to initials.
 * Supports online indicator and various sizes.
 *
 * @example
 * ```tsx
 * <Avatar src="/user.jpg" alt="John Doe" name="John Doe" />
 * <Avatar name="Jane Smith" size="lg" />
 * <Avatar name="Admin User" online />
 * <Avatar fallback={<UserIcon />} />
 * ```
 */
export const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, size, src, alt, name, fallback, online, ...props }, ref) => {
    const initials = name ? getInitials(name) : null;

    return (
      <div className="relative inline-block">
        <AvatarPrimitive.Root
          ref={ref}
          className={cn(avatarVariants({ size }), className)}
          {...props}
        >
          <AvatarPrimitive.Image
            src={src}
            alt={alt || name}
            className="h-full w-full object-cover"
          />
          <AvatarPrimitive.Fallback
            className={cn(
              'flex h-full w-full items-center justify-center bg-primary-100 text-primary-900 font-semibold',
              {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-base': size === 'lg',
                'text-xl': size === 'xl',
              }
            )}
            delayMs={600}
          >
            {fallback || initials || <User className="h-1/2 w-1/2 text-neutral-600" />}
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>

        {online && (
          <span
            className={cn(
              'absolute bottom-0 right-0 block rounded-full border-2 border-white bg-accent-500',
              {
                'h-2 w-2': size === 'sm',
                'h-3 w-3': size === 'md',
                'h-4 w-4': size === 'lg',
                'h-6 w-6': size === 'xl',
              }
            )}
            aria-label="Online"
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

/**
 * AvatarGroup Component
 *
 * Groups multiple avatars with overlap.
 *
 * @example
 * ```tsx
 * <AvatarGroup max={3}>
 *   <Avatar name="John Doe" />
 *   <Avatar name="Jane Smith" />
 *   <Avatar name="Bob Johnson" />
 *   <Avatar name="Alice Brown" />
 * </AvatarGroup>
 * ```
 */
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum number of avatars to show */
  max?: number;
  /** Size of avatars */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Children (Avatar components) */
  children: React.ReactNode;
}

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, max = 5, size = 'md', children, ...props }, ref) => {
    const childArray = React.Children.toArray(children);
    const displayChildren = max ? childArray.slice(0, max) : childArray;
    const remainingCount = childArray.length - displayChildren.length;

    return (
      <div ref={ref} className={cn('flex items-center -space-x-2', className)} {...props}>
        {displayChildren.map((child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                ...child.props,
                size,
                className: cn('ring-2 ring-white', child.props.className),
                key: index,
              } as any)
            : child
        )}
        {remainingCount > 0 && (
          <div
            className={cn(
              'relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-200 font-semibold text-neutral-600 ring-2 ring-white',
              {
                'h-8 w-8 text-xs': size === 'sm',
                'h-12 w-12 text-sm': size === 'md',
                'h-16 w-16 text-base': size === 'lg',
                'h-24 w-24 text-xl': size === 'xl',
              }
            )}
          >
            +{remainingCount}
          </div>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
