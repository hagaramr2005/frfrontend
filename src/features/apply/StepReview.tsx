import { useFormContext } from "react-hook-form";
import type { ApplicationFormValues } from "./schema";
import { tracks } from "../landing/Tracks/content";

const fieldLabels: Partial<Record<keyof ApplicationFormValues, string>> = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  country: "Country",
  phone: "Phone",
  city: "City",
  university: "University",
  faculty: "Faculty",
  academicYear: "Academic Year",
  graduationYear: "Graduation Year",
};

export function StepReview() {
  const { getValues } = useFormContext<ApplicationFormValues>();
  const values = getValues();
  const track = tracks.find((t) => t.id === values.track);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-label uppercase tracking-wide text-ink-400 mb-3">Personal Information</p>
        <dl className="grid grid-cols-1 tablet:grid-cols-2 gap-x-8 gap-y-3">
          {Object.entries(fieldLabels).map(([key, label]) => (
            <div key={key}>
              <dt className="text-body-sm text-ink-400">{label}</dt>
              <dd className="text-body text-ink-500">{values[key as keyof ApplicationFormValues] || "—"}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <p className="text-label uppercase tracking-wide text-ink-400 mb-2">Track</p>
        <p className="text-body text-ink-500">{track?.name ?? "—"}</p>
      </div>
      <div>
        <p className="text-label uppercase tracking-wide text-ink-400 mb-2">Motivation Statement</p>
        <p className="text-body text-ink-500 whitespace-pre-wrap">{values.motivation}</p>
      </div>
      <div>
        <p className="text-label uppercase tracking-wide text-ink-400 mb-2">CV</p>
        <p className="text-body text-ink-500">{values.cvFileName || "—"}</p>
      </div>
    </div>
  );
}
