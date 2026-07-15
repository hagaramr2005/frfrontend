import { forwardRef, useId, type TextareaHTMLAttributes } from "react";
import { CircleAlert } from "lucide-react";
import { cn } from "../../utils/cn";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
  maxLength?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, id, className, required, maxLength, value, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const count = typeof value === "string" ? value.length : 0;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-label uppercase tracking-wide text-ink-400">
          {label} {required && <span className="text-copper-700">*</span>}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          value={value}
          maxLength={maxLength}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "min-h-32 rounded-sm border bg-ivory-25 px-4 py-3 text-body text-ink-500 transition-colors duration-fast ease-standard",
            "placeholder:text-ink-400/60 focus:outline-none focus:border-copper-500",
            error ? "border-error" : "border-stone-300",
            className
          )}
          {...props}
        />
        <div className="flex items-center justify-between">
          {error ? (
            <p id={errorId} className="flex items-center gap-1.5 text-body-sm text-error">
              <CircleAlert size={14} strokeWidth={1.5} aria-hidden="true" />
              {error}
            </p>
          ) : hint ? (
            <p className="text-body-sm text-ink-400">{hint}</p>
          ) : (
            <span />
          )}
          {maxLength && (
            <span className="text-mono-detail text-ink-400">
              {count}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
