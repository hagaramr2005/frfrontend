import { Button } from "./Button";

export interface ErrorStateProps {
  title: string;
  description: string;
  retryAction?: { label: string; onClick: () => void };
  supportLink?: { label: string; href: string };
}

export function ErrorState({ title, description, retryAction, supportLink }: ErrorStateProps) {
  return (
    <div className="mx-auto flex max-w-copy flex-col items-center gap-4 py-16 text-center" role="alert">
      <p className="font-heading text-h4 text-ink-500">{title}</p>
      <p className="text-body text-ink-400">{description}</p>
      <div className="mt-2 flex items-center gap-4">
        {retryAction && (
          <Button variant="primary" onClick={retryAction.onClick}>
            {retryAction.label}
          </Button>
        )}
        {supportLink && (
          <a href={supportLink.href} className="text-body-sm text-copper-700 hover:underline">
            {supportLink.label}
          </a>
        )}
      </div>
    </div>
  );
}
