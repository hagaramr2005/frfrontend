import { Check } from "lucide-react";
import { cn } from "../../utils/cn";
import { Button } from "./Button";
import { Badge } from "./Badge";

export interface TrackCardProps {
  name: string;
  positioning: string;
  covers: string[];
  build: string[];
  ctaLabel: string;
  onCtaClick?: () => void;
  variant?: "default" | "selected" | "featured" | "coming-soon";
  className?: string;
}

export function TrackCard({
  name,
  positioning,
  covers,
  build,
  ctaLabel,
  onCtaClick,
  variant = "default",
  className,
}: TrackCardProps) {
  const isComingSoon = variant === "coming-soon";
  const isSelected = variant === "selected";

  return (
    <div
      className={cn(
        "relative flex flex-col gap-6 rounded-md border-t-4 border bg-ivory-50 p-8 tablet:p-10",
        isSelected ? "border-t-forest-500 border-forest-500 border-2" : "border-t-forest-500 border-stone-300",
        isComingSoon && "opacity-50 pointer-events-none border-t-stone-400",
        className
      )}
      role={onCtaClick ? "group" : undefined}
    >
      {isSelected && (
        <span className="absolute -top-3 right-6 flex h-6 w-6 items-center justify-center rounded-full bg-copper-700 text-ivory-25">
          <Check size={14} strokeWidth={2} aria-hidden="true" />
        </span>
      )}
      {variant === "featured" && <span className="text-label uppercase tracking-wide text-copper-700">Featured</span>}
      {isComingSoon && <Badge tone="neutral">Coming soon</Badge>}

      <h3 className="font-heading text-h2 text-ink-500">{name}</h3>
      <p className="text-body-lg text-ink-400">{positioning}</p>

      <ul className="flex flex-col gap-2">
        {covers.map((item) => (
          <li key={item} className="flex items-start gap-2 text-body text-ink-500">
            <span className="mt-2.5 h-px w-3 shrink-0 bg-forest-500" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <div>
        <p className="text-label uppercase tracking-wide text-ink-400 mb-2">What you'll build</p>
        <ul className="flex flex-col gap-1.5">
          {build.map((item) => (
            <li key={item} className="text-body-sm text-ink-400">
              — {item}
            </li>
          ))}
        </ul>
      </div>

      {!isComingSoon && (
        <Button variant="secondary" onClick={onCtaClick} className="mt-2 self-start">
          {ctaLabel}
        </Button>
      )}
    </div>
  );
}
