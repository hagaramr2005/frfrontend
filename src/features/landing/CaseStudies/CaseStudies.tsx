import { Section } from "../../../components/ui/Section";
import { Card } from "../../../components/ui/Card";
import { caseStudies } from "./content";

export function CaseStudies() {
  return (
    <Section id="case-studies" background="ivory">
      <div className="mb-10 max-w-copy">
        <h2 className="font-heading text-h1 text-ink-500">Industry Case Studies</h2>
        <p className="mt-3 text-body-lg text-ink-400">Real-world complexity, not textbook toy problems.</p>
      </div>
      <div className="flex gap-6 overflow-x-auto laptop:overflow-visible laptop:grid laptop:grid-cols-3 pb-4 snap-x snap-mandatory laptop:snap-none">
        {caseStudies.map((cs) => (
          <Card key={cs.id} background="linen" padding="lg" className="min-w-[280px] tablet:min-w-[340px] laptop:min-w-0 snap-start shrink-0 laptop:shrink">
            <p className="text-label uppercase tracking-wide text-copper-700">{cs.domain}</p>
            <p className="mt-4 text-body text-ink-500">{cs.problem}</p>
            <p className="mt-4 text-body-sm text-ink-400">{cs.approach}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
