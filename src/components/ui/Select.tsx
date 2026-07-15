import { forwardRef, useId, type SelectHTMLAttributes } from "react";
import { ChevronDown, CircleAlert } from "lucide-react";
import { cn } from "../../utils/cn";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, placeholder, error, id, className, required, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    const errorId = `${selectId}-error`;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={selectId} className="text-label uppercase tracking-wide text-ink-400">
          {label} {required && <span className="text-copper-700">*</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={error ? errorId : undefined}
            defaultValue=""
            className={cn(
              "h-11 w-full appearance-none rounded-sm border bg-ivory-25 pl-4 pr-10 text-body text-ink-500 transition-colors duration-fast ease-standard",
              "focus:outline-none focus:border-copper-500",
              error ? "border-error" : "border-stone-300",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown size={16} strokeWidth={1.5} aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-400" />
        </div>
        {error && (
          <p id={errorId} className="flex items-center gap-1.5 text-body-sm text-error">
            <CircleAlert size={14} strokeWidth={1.5} aria-hidden="true" />
            {error}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";
