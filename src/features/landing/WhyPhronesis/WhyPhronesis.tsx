import { Section } from "../../../components/ui/Section";
import { Card } from "../../../components/ui/Card";
import { pillars } from "./content";

export function WhyPhronesis() {
  return (
    <Section id="why-phronesis" background="ivory">
      <div className="mb-12 max-w-copy">
        <h2 className="font-heading text-h1 text-ink-500">Why Phronesis</h2>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <Card key={pillar.title} background="linen" padding="lg">
            <pillar.icon size={24} strokeWidth={1.5} className="text-forest-500" aria-hidden="true" />
            <h3 className="mt-5 font-heading text-h4 text-ink-500">{pillar.title}</h3>
            <p className="mt-2 text-body text-ink-400">{pillar.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
