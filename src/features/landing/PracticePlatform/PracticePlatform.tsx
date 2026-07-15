import { Section } from "../../../components/ui/Section";
import { practicePlatform } from "./content";

export function PracticePlatform() {
  return (
    <Section id="practice-platform" background="ivory">
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-label uppercase tracking-wide text-forest-500">{practicePlatform.eyebrow}</p>
          <h2 className="mt-3 font-heading text-h1 text-ink-500">{practicePlatform.title}</h2>
          <p className="mt-4 text-body-lg text-ink-400">{practicePlatform.description}</p>
        </div>
        <svg viewBox="0 0 400 260" className="w-full text-stone-400" aria-hidden="true">
          <rect x="0" y="0" width="400" height="260" rx="8" fill="#F1EDE4" />
          <rect x="24" y="24" width="150" height="14" rx="2" fill="#DFDAD0" />
          <rect x="24" y="52" width="352" height="1" fill="#DFDAD0" />
          <rect x="24" y="76" width="220" height="10" rx="2" fill="#DFDAD0" />
          <rect x="24" y="98" width="180" height="10" rx="2" fill="#DFDAD0" />
          <rect x="24" y="120" width="200" height="10" rx="2" fill="#DFDAD0" />
          <rect x="24" y="160" width="100" height="36" rx="4" fill="#B87333" opacity="0.8" />
        </svg>
      </div>
    </Section>
  );
}
