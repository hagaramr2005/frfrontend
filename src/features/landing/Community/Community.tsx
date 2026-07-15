import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../../../components/ui/Section";
import { Badge } from "../../../components/ui/Badge";
import { cn } from "../../../utils/cn";
import { testimonials } from "./content";

export function Community() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <Section id="community" background="rosewood">
      <div className="mb-10 max-w-copy">
        <h2 className="font-heading text-h1 text-ink-500">Community</h2>
      </div>
      <div className="mx-auto max-w-copy text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <blockquote className="font-heading italic text-h3 text-ink-500">"{active.quote}"</blockquote>
            <p className="mt-6 text-body font-medium text-ink-500">{active.name}</p>
            <Badge tone="forest" className="mt-2">
              {active.track}
            </Badge>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn("h-2 w-2 rounded-full transition-colors duration-fast", i === index ? "bg-copper-700" : "bg-stone-300")}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
