import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-label uppercase tracking-wide text-ink-400">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link to={item.href} className="hover:text-copper-700">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-ink-500" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className="text-stone-400">—</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
