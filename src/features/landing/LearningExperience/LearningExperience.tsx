import { Section } from "../../../components/ui/Section";
import { learningExperience } from "./content";

export function LearningExperience() {
  return (
    <Section id="learning-experience" background="ivory">
      <div className="mx-auto max-w-copy">
        <h2 className="font-heading text-h1 text-ink-500">Learning Experience</h2>
        <p className="mt-3 text-label uppercase tracking-wide text-copper-700">{learningExperience.callout}</p>
        <div className="mt-8 flex flex-col gap-6">
          {learningExperience.paragraphs.map((p, i) => (
            <p key={i} className="text-body text-ink-500 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <blockquote className="mt-8 border-l-2 border-copper-500 pl-6 font-heading italic text-h3 text-ink-500">
          {learningExperience.pullQuote}
        </blockquote>
      </div>
    </Section>
  );
}
