import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { FileQuestion, Search, ShoppingBag, Inbox, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const emptyStateVariants = cva(
  'flex flex-col items-center justify-center text-center',
  {
    variants: {
      variant: {
        default: '',
        compact: 'py-8',
        full: 'min-h-[400px] py-16',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const iconMap = {
  search: Search,
  cart: ShoppingBag,
  inbox: Inbox,
  error: AlertCircle,
  default: FileQuestion,
};

export interface EmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyStateVariants> {
  /** Icon type or custom icon */
  icon?: keyof typeof iconMap | React.ReactNode;
  /** Title of empty state */
  title: string;
  /** Description text */
  description?: string;
  /** Action button or content */
  action?: React.ReactNode;
}

/**
 * EmptyState Component
 *
 * An empty state illustration component for displaying
 * when there's no content to show.
 *
 * @example
 * ```tsx
 * <EmptyState
 *   icon="cart"
 *   title="Your cart is empty"
 *   description="Add some items to get started"
 *   action={<Button>Start Shopping</Button>}
 * />
 *
 * <EmptyState
 *   icon="search"
 *   title="No results found"
 *   description="Try adjusting your search or filter"
 *   variant="compact"
 * />
 * ```
 */
export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, variant, icon = 'default', title, description, action, ...props }, ref) => {
    const IconComponent =
      typeof icon === 'string' ? iconMap[icon] || iconMap.default : null;

    return (
      <div
        ref={ref}
        className={cn(emptyStateVariants({ variant }), className)}
        role="status"
        aria-live="polite"
        {...props}
      >
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-200">
          {IconComponent ? (
            <IconComponent className="h-10 w-10 text-neutral-600" aria-hidden="true" />
          ) : (
            icon
          )}
        </div>

        <h3 className="mb-2 text-xl font-bold text-primary-900">{title}</h3>

        {description && (
          <p className="mb-6 max-w-md text-sm text-neutral-600">{description}</p>
        )}

        {action && <div className="flex flex-col gap-2 sm:flex-row">{action}</div>}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';

/**
 * EmptyStateCard Component
 *
 * Empty state with card styling.
 *
 * @example
 * ```tsx
 * <EmptyStateCard
 *   icon="inbox"
 *   title="No messages"
 *   description="You're all caught up!"
 * />
 * ```
 */
export const EmptyStateCard = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'rounded-xl border-2 border-dashed border-neutral-400 bg-neutral-50 p-8',
          className
        )}
      >
        <EmptyState ref={ref} {...props} />
      </div>
    );
  }
);

EmptyStateCard.displayName = 'EmptyStateCard';
