import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Timeline } from "../../components/ui/Timeline";
import { Button } from "../../components/ui/Button";
import { useToast } from "../../components/ui/Toast";
import { applicationSchema, step1Schema, step2Schema, step3Schema, defaultApplicationValues, type ApplicationFormValues } from "./schema";
import { saveDraft, loadDraft, submitApplication } from "./applicationService";
import { StepPersonal } from "./StepPersonal";
import { StepTrack } from "./StepTrack";
import { StepMotivation } from "./StepMotivation";
import { StepReview } from "./StepReview";

const STEPS = [
  { id: "personal", label: "Step 1", title: "Personal Information", schema: step1Schema },
  { id: "track", label: "Step 2", title: "Track Selection", schema: step2Schema },
  { id: "motivation", label: "Step 3", title: "Motivation & CV", schema: step3Schema },
  { id: "review", label: "Step 4", title: "Review & Submit", schema: null },
];

export function ApplyWizard() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const draft = loadDraft();
  const trackParam = searchParams.get("track");

  const methods = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      ...defaultApplicationValues,
      ...draft,
      ...(trackParam === "ml" || trackParam === "genai" ? { track: trackParam } : {}),
    } as ApplicationFormValues,
    mode: "onBlur",
  });

  const values = methods.watch();
  useEffect(() => {
    const timeout = setTimeout(() => saveDraft(values), 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(values)]);

  async function handleNext() {
    const currentSchema = STEPS[step].schema;
    if (currentSchema) {
      const valid = await methods.trigger(Object.keys(currentSchema.shape) as (keyof ApplicationFormValues)[]);
      if (!valid) return;
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleBack() {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit() {
    setSubmitting(true);
    const result = await submitApplication(methods.getValues());
    setSubmitting(false);
    if (result.ok) {
      navigate("/apply/success");
    } else {
      showToast({
        title: "Submission failed",
        description: result.message,
        tone: "error",
        action: { label: "Retry", onClick: handleSubmit },
      });
    }
  }

  const timelineNodes = STEPS.map((s, idx) => ({
    id: s.id,
    label: s.label,
    title: s.title,
    state: idx === step ? ("current" as const) : idx < step ? ("completed" as const) : ("upcoming" as const),
  }));

  return (
    <FormProvider {...methods}>
      <div className="mx-auto max-w-copy">
        <Timeline mode="wizard" nodes={timelineNodes} className="mb-12" />

        <h1 className="font-heading text-h2 text-ink-500 mb-8">{STEPS[step].title}</h1>

        {step === 0 && <StepPersonal />}
        {step === 1 && <StepTrack />}
        {step === 2 && <StepMotivation />}
        {step === 3 && <StepReview />}

        <div className="mt-12 flex items-center justify-between">
          <Button variant="secondary" onClick={handleBack} disabled={step === 0} className="tablet:w-auto">
            Back
          </Button>
          {step < STEPS.length - 1 ? (
            <Button variant="primary" onClick={handleNext}>
              Continue
            </Button>
          ) : (
            <Button variant="primary" onClick={handleSubmit} loading={submitting}>
              Submit Application
            </Button>
          )}
        </div>
      </div>
    </FormProvider>
  );
}
