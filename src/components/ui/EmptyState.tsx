import type { ReactNode } from "react";
import { Button } from "./Button";

export interface EmptyStateProps {
  illustration?: ReactNode;
  title: string;
  description?: string;
  action?: { label: string; onClick: () => void };
}

export function EmptyState({ illustration, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center" role="status">
      {illustration && <div className="text-stone-400">{illustration}</div>}
      <p className="font-heading text-h4 text-ink-500">{title}</p>
      {description && <p className="max-w-copy text-body text-ink-400">{description}</p>}
      {action && (
        <Button variant="secondary" onClick={action.onClick} className="mt-2">
          {action.label}
        </Button>
      )}
    </div>
  );
}
