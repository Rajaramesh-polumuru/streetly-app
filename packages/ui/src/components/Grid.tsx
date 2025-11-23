import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '../lib/utils';

const gridVariants = cva('grid', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
      6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
      12: 'grid-cols-12',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      8: 'gap-8',
      10: 'gap-10',
      12: 'gap-12',
      16: 'gap-16',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-items-start',
      center: 'justify-items-center',
      end: 'justify-items-end',
      stretch: 'justify-items-stretch',
    },
  },
  defaultVariants: {
    cols: 1,
    gap: 4,
    align: 'stretch',
    justify: 'stretch',
  },
});

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  /** Custom element type */
  as?: React.ElementType;
}

/**
 * Grid Component
 *
 * A responsive grid layout component with configurable columns and spacing.
 * Automatically adjusts to different screen sizes.
 *
 * @example
 * ```tsx
 * <Grid cols={3} gap={4}>
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </Grid>
 *
 * <Grid cols={2} gap={6} align="center">
 *   <div>Column 1</div>
 *   <div>Column 2</div>
 * </Grid>
 *
 * <Grid cols={4} gap={8}>
 *   {products.map(product => (
 *     <ProductCard key={product.id} {...product} />
 *   ))}
 * </Grid>
 * ```
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols, gap, align, justify, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(gridVariants({ cols, gap, align, justify }), className)}
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';

/**
 * GridItem Component
 *
 * Individual grid item with column span controls.
 *
 * @example
 * ```tsx
 * <Grid cols={12} gap={4}>
 *   <GridItem colSpan={8}>Main Content</GridItem>
 *   <GridItem colSpan={4}>Sidebar</GridItem>
 * </Grid>
 * ```
 */
export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns to span */
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full';
  /** Row span */
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
  /** Custom element type */
  as?: React.ElementType;
}

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, colSpan, rowSpan, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          colSpan && {
            'col-span-1': colSpan === 1,
            'col-span-2': colSpan === 2,
            'col-span-3': colSpan === 3,
            'col-span-4': colSpan === 4,
            'col-span-5': colSpan === 5,
            'col-span-6': colSpan === 6,
            'col-span-7': colSpan === 7,
            'col-span-8': colSpan === 8,
            'col-span-9': colSpan === 9,
            'col-span-10': colSpan === 10,
            'col-span-11': colSpan === 11,
            'col-span-12': colSpan === 12,
            'col-span-full': colSpan === 'full',
          },
          rowSpan && {
            'row-span-1': rowSpan === 1,
            'row-span-2': rowSpan === 2,
            'row-span-3': rowSpan === 3,
            'row-span-4': rowSpan === 4,
            'row-span-5': rowSpan === 5,
            'row-span-6': rowSpan === 6,
            'row-span-full': rowSpan === 'full',
          },
          className
        )}
        {...props}
      />
    );
  }
);

GridItem.displayName = 'GridItem';

/**
 * SimpleGrid Component
 *
 * A simplified grid with equal-width columns.
 *
 * @example
 * ```tsx
 * <SimpleGrid columns={3} spacing={4}>
 *   <Card>1</Card>
 *   <Card>2</Card>
 *   <Card>3</Card>
 * </SimpleGrid>
 * ```
 */
export interface SimpleGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns */
  columns?: number;
  /** Spacing between items */
  spacing?: number;
  /** Minimum column width (in px) */
  minChildWidth?: number;
}

export const SimpleGrid = React.forwardRef<HTMLDivElement, SimpleGridProps>(
  ({ className, columns = 1, spacing = 4, minChildWidth, style, ...props }, ref) => {
    const gridTemplateColumns = minChildWidth
      ? `repeat(auto-fit, minmax(${minChildWidth}px, 1fr))`
      : undefined;

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          {
            'gap-0': spacing === 0,
            'gap-1': spacing === 1,
            'gap-2': spacing === 2,
            'gap-3': spacing === 3,
            'gap-4': spacing === 4,
            'gap-5': spacing === 5,
            'gap-6': spacing === 6,
            'gap-8': spacing === 8,
            'gap-10': spacing === 10,
            'gap-12': spacing === 12,
            'gap-16': spacing === 16,
          },
          !minChildWidth && {
            'grid-cols-1': columns === 1,
            'grid-cols-2': columns === 2,
            'grid-cols-3': columns === 3,
            'grid-cols-4': columns === 4,
            'grid-cols-5': columns === 5,
            'grid-cols-6': columns === 6,
          },
          className
        )}
        style={{
          ...style,
          ...(gridTemplateColumns && { gridTemplateColumns }),
        }}
        {...props}
      />
    );
  }
);

SimpleGrid.displayName = 'SimpleGrid';
