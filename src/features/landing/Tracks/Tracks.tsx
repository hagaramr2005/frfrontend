import { Section } from "../../../components/ui/Section";
import { TrackCard } from "../../../components/ui/TrackCard";
import { scrollToSection } from "../../../utils/scrollToSection";
import { tracks } from "./content";

export function Tracks() {
  return (
    <Section id="tracks" background="ivory">
      <div className="mb-12 max-w-copy">
        <h2 className="font-heading text-h1 text-ink-500">Tracks</h2>
        <p className="mt-3 text-body-lg text-ink-400">Two ways in. Choose the one that matches the problems you want to get good at.</p>
      </div>
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8">
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            name={track.name}
            positioning={track.positioning}
            covers={track.covers}
            build={track.build}
            ctaLabel={`Explore the ${track.name} track`}
            onCtaClick={() => scrollToSection("roadmaps")}
          />
        ))}
      </div>
    </Section>
  );
}
