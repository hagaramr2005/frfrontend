import { Section } from "../../../components/ui/Section";
import { paperClub } from "./content";

export function PaperClub() {
  return (
    <Section id="paper-club" background="forest-dark">
      <div className="mx-auto max-w-copy">
        <h2 className="font-heading text-h1">Paper Club</h2>
        <p className="mt-4 text-body-lg text-ivory-25/85">{paperClub.intro}</p>
        <p className="mt-6 text-label uppercase tracking-wide text-copper-400">{paperClub.cadence}</p>
        <ul className="mt-6 flex flex-col gap-3">
          {paperClub.examples.map((ex) => (
            <li key={ex} className="flex items-start gap-3 text-body text-ivory-25/85">
              <span className="mt-2.5 h-px w-4 shrink-0 bg-copper-400" aria-hidden="true" />
              {ex}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
