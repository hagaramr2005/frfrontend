import { Link } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <Section id="not-found" background="ivory" animateOnScroll={false} className="pt-30 min-h-[70vh] flex items-center">
      <div className="mx-auto flex max-w-copy flex-col items-center gap-6 text-center">
        <p className="text-label uppercase tracking-wide text-copper-700">404</p>
        <h1 className="font-heading text-h1 text-ink-500">This page doesn't exist.</h1>
        <p className="text-body-lg text-ink-400">The page you're looking for may have moved or never existed.</p>
        <Link to="/">
          <Button variant="secondary">Return to homepage</Button>
        </Link>
      </div>
    </Section>
  );
}
