import { cn } from "../../utils/cn";

export interface LoaderProps {
  label?: string;
  className?: string;
}

/** Calm pulsing bar — no spinner, per brand's explicit no-spinner rule. */
export function Loader({ label = "Loading", className }: LoaderProps) {
  return (
    <div className={cn("flex flex-col items-center gap-3 py-6", className)} role="status" aria-live="polite">
      <span className="h-1.5 w-32 overflow-hidden rounded-full bg-stone-300">
        <span className="block h-full w-1/3 animate-pulse rounded-full bg-forest-500" />
      </span>
      <span className="text-body-sm text-ink-400">{label}</span>
    </div>
  );
}
