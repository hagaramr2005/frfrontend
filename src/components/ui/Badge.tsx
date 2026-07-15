import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const badgeStyles = cva("inline-flex items-center rounded-sm px-3 py-1 text-label uppercase tracking-wide", {
  variants: {
    tone: {
      sage: "bg-sage-100 text-sage-700",
      twilight: "bg-twilight-100 text-twilight-700",
      forest: "bg-forest-500/10 text-forest-500",
      copper: "bg-copper-500/10 text-copper-700",
      neutral: "bg-stone-200 text-ink-400",
    },
  },
  defaultVariants: { tone: "neutral" },
});

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeStyles> {}

export function Badge({ tone, className, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeStyles({ tone }), className)} {...props}>
      {children}
    </span>
  );
}
