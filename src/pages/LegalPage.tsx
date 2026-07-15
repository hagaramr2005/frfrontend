import { Section } from "../components/ui/Section";

export default function LegalPage({ title }: { title: string }) {
  return (
    <Section id="legal" background="ivory" animateOnScroll={false} maxWidth="copy" className="pt-30">
      <h1 className="font-heading text-h1 text-ink-500">{title}</h1>
      <p className="mt-4 text-body text-ink-400">This page is a placeholder and will be completed alongside backend and legal review.</p>
    </Section>
  );
}
