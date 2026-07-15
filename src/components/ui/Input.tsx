import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { CircleAlert } from "lucide-react";
import { cn } from "../../utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, className, required, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-label uppercase tracking-wide text-ink-400">
          {label} {required && <span className="text-copper-700">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          className={cn(
            "h-11 rounded-sm border bg-ivory-25 px-4 text-body text-ink-500 transition-colors duration-fast ease-standard",
            "placeholder:text-ink-400/60 focus:outline-none focus:border-copper-500",
            error ? "border-error" : "border-stone-300",
            className
          )}
          {...props}
        />
        {error ? (
          <p id={errorId} className="flex items-center gap-1.5 text-body-sm text-error">
            <CircleAlert size={14} strokeWidth={1.5} aria-hidden="true" />
            {error}
          </p>
        ) : hint ? (
          <p id={hintId} className="text-body-sm text-ink-400">
            {hint}
          </p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";
