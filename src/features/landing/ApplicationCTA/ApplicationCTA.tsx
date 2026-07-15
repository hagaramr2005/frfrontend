import { Section } from "../../../components/ui/Section";
import { Button } from "../../../components/ui/Button";
import { applicationCTA } from "./content";

export function ApplicationCTA() {
  return (
    <Section id="apply-cta" background="forest-dark">
      <div className="mx-auto flex max-w-copy flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-h1">{applicationCTA.title}</h2>
        <p className="text-body-lg text-ivory-25/80">{applicationCTA.support}</p>
        <Button variant="primary" size="lg" onClick={() => (window.location.href = "/apply")}>
          {applicationCTA.cta}
        </Button>
      </div>
    </Section>
  );
}
