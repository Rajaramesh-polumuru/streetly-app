import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '../lib/utils';

const skeletonVariants = cva(
  'animate-pulse bg-neutral-300 rounded-lg',
  {
    variants: {
      variant: {
        text: 'h-4 w-full rounded',
        circle: 'rounded-full',
        rectangle: 'rounded-lg',
        card: 'h-64 w-full rounded-xl',
        avatar: 'h-12 w-12 rounded-full',
        button: 'h-11 w-32 rounded-lg',
        input: 'h-11 w-full rounded-lg',
        table: 'h-96 w-full rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'text',
    },
  }
);

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  /** Number of skeleton elements to render (for text variant) */
  count?: number;
  /** Width of the skeleton */
  width?: string | number;
  /** Height of the skeleton */
  height?: string | number;
}

/**
 * Skeleton Component
 *
 * A loading skeleton with different variants for various UI elements.
 * Uses a subtle pulse animation.
 *
 * @example
 * ```tsx
 * <Skeleton variant="text" count={3} />
 * <Skeleton variant="circle" width={50} height={50} />
 * <Skeleton variant="avatar" />
 * <Skeleton variant="card" />
 * <Skeleton variant="button" />
 * ```
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, count = 1, width, height, style, ...props }, ref) => {
    const skeletonStyle = {
      ...style,
      ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
      ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
    };

    if (count > 1) {
      return (
        <div className="flex flex-col gap-2" ref={ref}>
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={cn(skeletonVariants({ variant }), className)}
              style={skeletonStyle}
              aria-busy="true"
              aria-live="polite"
              {...props}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant }), className)}
        style={skeletonStyle}
        aria-busy="true"
        aria-live="polite"
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

/**
 * SkeletonText Component
 *
 * Specialized skeleton for text content with multiple lines.
 *
 * @example
 * ```tsx
 * <SkeletonText lines={3} />
 * ```
 */
export interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of text lines */
  lines?: number;
  /** Width of the last line (percentage) */
  lastLineWidth?: number;
}

export const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  ({ className, lines = 3, lastLineWidth = 60, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-col gap-2', className)} {...props}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'h-4 animate-pulse rounded bg-neutral-300',
              index === lines - 1 && `w-[${lastLineWidth}%]`
            )}
            style={index === lines - 1 ? { width: `${lastLineWidth}%` } : undefined}
            aria-busy="true"
            aria-live="polite"
          />
        ))}
      </div>
    );
  }
);

SkeletonText.displayName = 'SkeletonText';

/**
 * SkeletonCard Component
 *
 * Specialized skeleton for card content.
 *
 * @example
 * ```tsx
 * <SkeletonCard />
 * ```
 */
export const SkeletonCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('rounded-xl bg-white p-6 shadow-sm', className)}
        {...props}
      >
        <Skeleton variant="text" className="mb-4 h-6 w-3/4" />
        <Skeleton variant="rectangle" className="mb-4 h-32 w-full" />
        <SkeletonText lines={3} />
      </div>
    );
  }
);

SkeletonCard.displayName = 'SkeletonCard';

/**
 * SkeletonTable Component
 *
 * Specialized skeleton for table content.
 *
 * @example
 * ```tsx
 * <SkeletonTable rows={5} cols={4} />
 * ```
 */
export interface SkeletonTableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of rows */
  rows?: number;
  /** Number of columns */
  cols?: number;
}

export const SkeletonTable = React.forwardRef<HTMLDivElement, SkeletonTableProps>(
  ({ className, rows = 5, cols = 4, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-3', className)} {...props}>
        {/* Header */}
        <div className="flex gap-4">
          {Array.from({ length: cols }).map((_, index) => (
            <Skeleton key={`header-${index}`} variant="text" className="h-6 flex-1" />
          ))}
        </div>
        {/* Rows */}
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex gap-4">
            {Array.from({ length: cols }).map((_, colIndex) => (
              <Skeleton key={`cell-${rowIndex}-${colIndex}`} variant="text" className="h-4 flex-1" />
            ))}
          </div>
        ))}
      </div>
    );
  }
);

SkeletonTable.displayName = 'SkeletonTable';
