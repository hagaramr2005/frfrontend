import type { ApplicationFormValues } from "./schema";

const STORAGE_KEY = "phronesis_application_draft";

export function saveDraft(values: Partial<ApplicationFormValues>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  } catch {
    // localStorage may be unavailable — autosave is a convenience, not a requirement
  }
}

export function loadDraft(): Partial<ApplicationFormValues> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearDraft() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // no-op
  }
}

/** Mock submission — simulates network latency and a 90% success rate. Real Supabase wiring lands later. */
export async function submitApplication(_values: ApplicationFormValues): Promise<{ ok: true } | { ok: false; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  if (Math.random() < 0.1) {
    return { ok: false, message: "We couldn't reach the server. Your answers are saved — please try again." };
  }
  clearDraft();
  return { ok: true };
}
