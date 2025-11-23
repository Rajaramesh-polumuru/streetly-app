/**
 * Streetly UI Component Library
 *
 * A comprehensive, accessible, and production-ready component library
 * following Material Design 3 and iOS Human Interface Guidelines.
 */

// Core Components
export { Button, ButtonGroup, IconButton } from './Button';
export type { ButtonProps, ButtonGroupProps, IconButtonProps } from './Button';

export { Input } from './Input';
export type { InputProps } from './Input';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
export type { CardProps } from './Card';

export { Badge } from './Badge';
export type { BadgeProps } from './Badge';

// Form Components
export { Textarea } from './Textarea';
export type { TextareaProps } from './Textarea';

export { Select, SelectItem, SelectGroup, SelectSeparator } from './Select';
export type { SelectProps } from './Select';

export { Checkbox } from './Checkbox';
export type { CheckboxProps } from './Checkbox';

export { RadioGroup, RadioItem } from './Radio';
export type { RadioGroupProps, RadioItemProps } from './Radio';

export { Switch } from './Switch';
export type { SwitchProps } from './Switch';

export { Label } from './Label';
export type { LabelProps } from './Label';

// Feedback Components
export { Skeleton, SkeletonText, SkeletonCard, SkeletonTable } from './Skeleton';
export type { SkeletonProps } from './Skeleton';

export { Spinner, SpinnerOverlay, SpinnerButton } from './Spinner';
export type { SpinnerProps, SpinnerOverlayProps } from './Spinner';

export { Alert, AlertTitle, AlertDescription } from './Alert';
export type { AlertProps } from './Alert';

// Overlay Components
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './Dialog';

export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerClose,
} from './Drawer';
export type { DrawerProps } from './Drawer';

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownShortcut,
} from './Dropdown';

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';
export type { TooltipProps } from './Tooltip';

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  PopoverFooter,
  PopoverClose,
} from './Popover';

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from './AlertDialog';

// Data Display Components
export { Avatar, AvatarGroup } from './Avatar';
export type { AvatarProps, AvatarGroupProps } from './Avatar';

export { EmptyState, EmptyStateCard } from './EmptyState';
export type { EmptyStateProps } from './EmptyState';

export { StatusIndicator, StatusDot, StatusBadge } from './StatusIndicator';
export type { StatusIndicatorProps } from './StatusIndicator';

export { Separator } from './Separator';
export type { SeparatorProps } from './Separator';

// Layout Components
export { Container, Section } from './Container';
export type { ContainerProps } from './Container';

export { Stack, HStack, VStack, Divider } from './Stack';
export type { StackProps } from './Stack';

export { Grid, GridItem, SimpleGrid } from './Grid';
export type { GridProps, GridItemProps, SimpleGridProps } from './Grid';
