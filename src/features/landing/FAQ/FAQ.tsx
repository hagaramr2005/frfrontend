import { Section } from "../../../components/ui/Section";
import { Accordion } from "../../../components/ui/Accordion";
import { faqItems } from "./content";

export function FAQ() {
  return (
    <Section id="faq" background="ivory" maxWidth="narrow">
      <div className="mb-10 text-center">
        <h2 className="font-heading text-h1 text-ink-500">Frequently Asked Questions</h2>
      </div>
      <Accordion items={faqItems} />
    </Section>
  );
}
