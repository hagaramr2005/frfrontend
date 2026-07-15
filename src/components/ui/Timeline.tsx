import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export interface TimelineNode {
  id: string;
  label: string;
  title: string;
  description?: string;
  state?: "upcoming" | "current" | "completed";
}

export interface TimelineProps {
  mode: "roadmap" | "wizard";
  nodes: TimelineNode[];
  className?: string;
  renderDetail?: (node: TimelineNode) => React.ReactNode;
}

export function Timeline({ mode, nodes, className, renderDetail }: TimelineProps) {
  if (mode === "wizard") {
    return (
      <ol className={cn("flex items-center gap-2 tablet:gap-4", className)}>
        {nodes.map((node, idx) => (
          <li key={node.id} className="flex flex-1 items-center gap-2 tablet:gap-4">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-body-sm font-medium border",
                  node.state === "current" && "bg-copper-700 text-ivory-25 border-copper-700",
                  node.state === "completed" && "bg-forest-500 text-ivory-25 border-forest-500",
                  (!node.state || node.state === "upcoming") && "bg-transparent text-ink-400 border-stone-300"
                )}
                aria-current={node.state === "current" ? "step" : undefined}
              >
                {idx + 1}
              </span>
              <span className="hidden tablet:inline text-body-sm text-ink-400">{node.title}</span>
            </div>
            {idx < nodes.length - 1 && <span className="h-px flex-1 bg-stone-300" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className={cn("flex flex-col laptop:flex-row gap-8 laptop:gap-0", className)}>
      {nodes.map((node, idx) => (
        <li key={node.id} className="relative flex-1 laptop:px-4">
          {idx < nodes.length - 1 && (
            <motion.span
              aria-hidden="true"
              className="hidden laptop:block absolute top-2.5 left-1/2 h-px w-full bg-stone-300 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
          <div className="relative z-10 flex laptop:flex-col gap-3">
            <span className="h-5 w-5 shrink-0 rounded-full bg-forest-500 ring-4 ring-ivory-25" />
            <div>
              <p className="text-label uppercase tracking-wide text-copper-700">{node.label}</p>
              <p className="mt-1 font-heading text-h4 text-ink-500">{node.title}</p>
              {node.description && <p className="mt-1 text-body-sm text-ink-400">{node.description}</p>}
              {renderDetail?.(node)}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
