import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const cardStyles = cva("rounded-md border transition-shadow duration-fast ease-standard", {
  variants: {
    background: {
      linen: "bg-linen-50 border-stone-300",
      ivory: "bg-ivory-50 border-stone-300",
      rosewood: "bg-rosewood-100 border-rosewood-100",
    },
    hoverable: {
      true: "hover:shadow-card-hover",
      false: "",
    },
    padding: {
      md: "p-6",
      lg: "p-8 tablet:p-10",
    },
  },
  defaultVariants: { background: "linen", hoverable: true, padding: "md" },
});

export interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardStyles> {}

export function Card({ background, hoverable, padding, className, children, ...props }: CardProps) {
  return (
    <div className={cn(cardStyles({ background, hoverable, padding }), className)} {...props}>
      {children}
    </div>
  );
}
