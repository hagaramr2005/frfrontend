import { useFormContext, Controller } from "react-hook-form";
import { TrackCard } from "../../components/ui/TrackCard";
import { tracks } from "../landing/Tracks/content";
import type { ApplicationFormValues } from "./schema";

export function StepTrack() {
  const { control, formState: { errors } } = useFormContext<ApplicationFormValues>();
  return (
    <Controller
      control={control}
      name="track"
      render={({ field }) => (
        <div>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
            {tracks.map((t) => (
              <div key={t.id} onClick={() => field.onChange(t.id)} className="cursor-pointer">
                <TrackCard
                  name={t.name}
                  positioning={t.positioning}
                  covers={t.covers}
                  build={t.build}
                  ctaLabel="Select this track"
                  variant={field.value === t.id ? "selected" : "default"}
                  onCtaClick={() => field.onChange(t.id)}
                />
              </div>
            ))}
          </div>
          {errors.track && <p className="mt-4 text-body-sm text-error">{errors.track.message as string}</p>}
        </div>
      )}
    />
  );
}
