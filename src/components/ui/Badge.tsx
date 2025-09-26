import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-2 rounded-lg border border-border-color bg-dark-bg px-4 py-2 text-sm font-light text-text-secondary backdrop-blur-sm',
  {
    variants: {},
    defaultVariants: {},
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants(), className)} {...props} />
  );
}

export { Badge, badgeVariants };
