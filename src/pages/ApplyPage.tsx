import { Section } from "../components/ui/Section";
import { ApplyWizard } from "../features/apply/ApplyWizard";

export default function ApplyPage() {
  return (
    <Section id="apply" background="ivory" animateOnScroll={false} className="pt-30">
      <ApplyWizard />
    </Section>
  );
}
