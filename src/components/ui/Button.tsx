import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 font-en-body font-medium rounded-md transition-colors duration-fast ease-standard disabled:opacity-50 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-copper-500 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-copper-700 text-ivory-25 hover:bg-copper-500",
        secondary: "bg-transparent text-forest-500 border border-forest-500 hover:bg-sage-100",
        tertiary: "bg-transparent text-ink-500 underline-offset-4 hover:text-copper-700 hover:underline px-0",
        destructive: "bg-transparent text-error border border-error hover:bg-error hover:text-ivory-25",
        success: "bg-success/10 text-success hover:bg-success/20",
        warning: "bg-warning/10 text-warning hover:bg-warning/20",
        "icon-only": "bg-transparent text-ink-500 hover:text-copper-700 p-0",
      },
      size: {
        sm: "h-9 px-4 text-body-sm",
        md: "h-11 px-6 text-body",
        lg: "h-14 px-8 text-body-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    compoundVariants: [
      { variant: "icon-only", size: "sm", class: "w-9" },
      { variant: "icon-only", size: "md", class: "w-11" },
      { variant: "icon-only", size: "lg", class: "w-14" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, loading, children, disabled, "aria-label": ariaLabel, ...props }, ref) => {
    if (variant === "icon-only" && !ariaLabel) {
      // eslint-disable-next-line no-console
      console.warn("Button: variant='icon-only' requires an aria-label.");
    }
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, fullWidth }), className)}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? (
          <span className="h-1.5 w-16 overflow-hidden rounded-full bg-current/20">
            <span className="block h-full w-1/3 animate-pulse rounded-full bg-current" />
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
