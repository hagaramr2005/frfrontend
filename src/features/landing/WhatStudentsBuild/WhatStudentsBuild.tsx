import { Section } from "../../../components/ui/Section";
import { Card } from "../../../components/ui/Card";
import { Badge } from "../../../components/ui/Badge";
import { projects } from "./content";

function PlaceholderDiagram() {
  return (
    <svg viewBox="0 0 200 100" className="h-24 w-full text-forest-500" aria-hidden="true">
      <rect x="10" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
      <line x1="120" y1="50" x2="170" y2="30" stroke="currentColor" strokeWidth="1" />
      <line x1="120" y1="50" x2="170" y2="70" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function WhatStudentsBuild() {
  return (
    <Section id="what-students-build" background="ivory">
      <div className="mb-12 max-w-copy">
        <h2 className="font-heading text-h1 text-ink-500">What Students Build</h2>
        <p className="mt-3 text-body-lg text-ink-400">Proof over promises.</p>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} background="linen" padding="md">
            {project.illustrationPlaceholder && <PlaceholderDiagram />}
            <Badge tone={project.track === "ml" ? "sage" : "twilight"} className="mt-4">
              {project.track === "ml" ? "Machine Learning" : "Generative AI"}
            </Badge>
            <h3 className="mt-3 font-heading text-h4 text-ink-500">{project.title}</h3>
            <p className="mt-2 text-body-sm text-ink-400">{project.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
