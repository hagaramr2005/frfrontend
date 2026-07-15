import { useState } from "react";
import { Section } from "../../../components/ui/Section";
import { Button } from "../../../components/ui/Button";
import { Timeline } from "../../../components/ui/Timeline";
import { Accordion } from "../../../components/ui/Accordion";
import { roadmaps } from "./content";

export function Roadmaps() {
  const [active, setActive] = useState<"ml" | "genai">("ml");
  const nodes = roadmaps[active];

  return (
    <Section id="roadmaps" background="ivory">
      <div className="mb-10 flex flex-col tablet:flex-row tablet:items-end tablet:justify-between gap-6">
        <div className="max-w-copy">
          <h2 className="font-heading text-h1 text-ink-500">Roadmaps</h2>
          <p className="mt-3 text-body-lg text-ink-400">The literal, module-by-module structure of each track.</p>
        </div>
        <div className="inline-flex rounded-md border border-stone-300 p-1 self-start">
          <Button
            variant={active === "ml" ? "primary" : "tertiary"}
            size="sm"
            aria-pressed={active === "ml"}
            onClick={() => setActive("ml")}
            className={active === "ml" ? "" : "px-4"}
          >
            Machine Learning
          </Button>
          <Button
            variant={active === "genai" ? "primary" : "tertiary"}
            size="sm"
            aria-pressed={active === "genai"}
            onClick={() => setActive("genai")}
            className={active === "genai" ? "" : "px-4"}
          >
            Generative AI
          </Button>
        </div>
      </div>

      <Timeline
        mode="roadmap"
        nodes={nodes}
        renderDetail={(node) => {
          const full = nodes.find((n) => n.id === node.id);
          if (!full?.detail) return null;
          return (
            <div className="mt-3">
              <Accordion items={[{ id: `${node.id}-detail`, question: "More detail", answer: full.detail }]} />
            </div>
          );
        }}
      />
    </Section>
  );
}
