import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { UploadCloud, FileCheck2 } from "lucide-react";
import { Textarea } from "../../components/ui/Textarea";
import { cn } from "../../utils/cn";
import type { ApplicationFormValues } from "./schema";

export function StepMotivation() {
  const { register, watch, setValue, formState: { errors } } = useFormContext<ApplicationFormValues>();
  const [dragging, setDragging] = useState(false);
  const motivation = watch("motivation") ?? "";
  const cvFileName = watch("cvFileName");

  function handleFiles(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;
    setValue("cvFileName", file.name, { shouldValidate: true });
  }

  return (
    <div className="flex flex-col gap-8">
      <Textarea
        label="Motivation Statement"
        required
        maxLength={1200}
        placeholder="Tell us about a problem you reasoned through, and how you got there."
        {...register("motivation")}
        value={motivation}
        error={errors.motivation?.message}
      />

      <div>
        <p className="text-label uppercase tracking-wide text-ink-400 mb-1.5">CV (PDF) *</p>
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files); }}
          className={cn(
            "flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed p-10 text-center transition-colors duration-fast",
            dragging ? "border-copper-500 bg-copper-500/5" : "border-stone-300"
          )}
        >
          {cvFileName ? (
            <>
              <FileCheck2 size={24} strokeWidth={1.5} className="text-forest-500" aria-hidden="true" />
              <p className="text-body-sm text-ink-500">{cvFileName}</p>
              <label className="text-body-sm text-copper-700 hover:underline cursor-pointer">
                Replace file
                <input type="file" accept=".pdf" className="sr-only" onChange={(e) => handleFiles(e.target.files)} />
              </label>
            </>
          ) : (
            <>
              <UploadCloud size={24} strokeWidth={1.5} className="text-ink-400" aria-hidden="true" />
              <p className="text-body-sm text-ink-500">Drag and drop your CV, or</p>
              <label className="text-body-sm text-copper-700 hover:underline cursor-pointer">
                browse files
                <input type="file" accept=".pdf" className="sr-only" onChange={(e) => handleFiles(e.target.files)} />
              </label>
              <p className="text-mono-detail text-ink-400">PDF, up to 5MB</p>
            </>
          )}
        </div>
        {errors.cvFileName && <p className="mt-1.5 text-body-sm text-error">{errors.cvFileName.message}</p>}
      </div>
    </div>
  );
}
