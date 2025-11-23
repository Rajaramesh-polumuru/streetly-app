import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircle, CheckCircle2, Info, X, XCircle } from 'lucide-react';
import React from 'react';

import { cn } from '../lib/utils';

const alertVariants = cva('relative w-full rounded-lg border-2 p-4 transition-all duration-300', {
  variants: {
    variant: {
      success: 'border-accent-500 bg-accent-50 text-accent-900',
      warning: 'border-warning-500 bg-warning-50 text-warning-900',
      error: 'border-error-500 bg-error-50 text-error-900',
      info: 'border-info-500 bg-info-50 text-info-900',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
});

const iconMap = {
  success: CheckCircle2,
  warning: AlertCircle,
  error: XCircle,
  info: Info,
};

const iconColorMap = {
  success: 'text-accent-600',
  warning: 'text-warning-600',
  error: 'text-error-600',
  info: 'text-info-600',
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /** Alert title */
  title?: string;
  /** Alert description/message */
  description?: string;
  /** Whether the alert can be dismissed */
  dismissible?: boolean;
  /** Callback when alert is dismissed */
  onDismiss?: () => void;
  /** Custom icon (overrides default) */
  icon?: React.ReactNode;
  /** Hide default icon */
  hideIcon?: boolean;
}

/**
 * Alert Component
 *
 * An alert message box with different variants for various states.
 * Supports dismissible alerts and custom icons.
 *
 * @example
 * ```tsx
 * <Alert variant="success" title="Success!" description="Your order has been placed." />
 * <Alert variant="error" description="An error occurred. Please try again." dismissible />
 * <Alert variant="warning" title="Warning" description="Your session will expire soon." />
 * <Alert variant="info" description="New features available!" />
 * ```
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = 'info',
      title,
      description,
      dismissible,
      onDismiss,
      icon,
      hideIcon,
      children,
      ...props
    },
    ref
  ) => {
    const [dismissed, setDismissed] = React.useState(false);

    const handleDismiss = () => {
      setDismissed(true);
      onDismiss?.();
    };

    if (dismissed) {
      return null;
    }

    const Icon = variant ? iconMap[variant] : Info;
    const iconColor = variant ? iconColorMap[variant] : iconColorMap.info;

    return (
      <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
        <div className="flex">
          {!hideIcon && (
            <div className={cn('flex-shrink-0', iconColor)}>
              {icon || <Icon className="h-5 w-5" aria-hidden="true" />}
            </div>
          )}
          <div className={cn('flex-1', !hideIcon && 'ml-3')}>
            {title && <h3 className="text-sm font-semibold">{title}</h3>}
            {description && <div className={cn('text-sm', title && 'mt-1')}>{description}</div>}
            {children && (
              <div className={cn('text-sm', (title || description) && 'mt-2')}>{children}</div>
            )}
          </div>
          {dismissible && (
            <button
              type="button"
              onClick={handleDismiss}
              className={cn(
                'ml-3 inline-flex flex-shrink-0 rounded-lg p-1.5 transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-2',
                variant === 'success' &&
                  'text-accent-600 hover:bg-accent-100 focus:ring-accent-500',
                variant === 'warning' &&
                  'text-warning-600 hover:bg-warning-100 focus:ring-warning-500',
                variant === 'error' && 'text-error-600 hover:bg-error-100 focus:ring-error-500',
                variant === 'info' && 'text-info-600 hover:bg-info-100 focus:ring-info-500'
              )}
              aria-label="Dismiss alert"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';

/**
 * AlertTitle Component
 *
 * Title element for Alert component.
 */
export const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3 ref={ref} className={cn('text-sm font-semibold', className)} {...props}>
    {children}
  </h3>
));

AlertTitle.displayName = 'AlertTitle';

/**
 * AlertDescription Component
 *
 * Description element for Alert component.
 */
export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('mt-1 text-sm', className)} {...props} />
));

AlertDescription.displayName = 'AlertDescription';
