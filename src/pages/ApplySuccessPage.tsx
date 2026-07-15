import { CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

export default function ApplySuccessPage() {
  return (
    <Section id="apply-success" background="ivory" animateOnScroll={false} className="pt-30 min-h-[70vh] flex items-center">
      <div className="mx-auto flex max-w-copy flex-col items-center gap-6 text-center">
        <CircleCheck size={32} strokeWidth={1.5} className="text-success" aria-hidden="true" />
        <h1 className="font-heading text-h1 text-ink-500">Your application has been received.</h1>
        <p className="text-body-lg text-ink-400">
          Thank you for taking the time to apply. We review every application carefully — you'll hear back from us within two weeks.
        </p>
        <Link to="/">
          <Button variant="secondary">Return to homepage</Button>
        </Link>
      </div>
    </Section>
  );
}
