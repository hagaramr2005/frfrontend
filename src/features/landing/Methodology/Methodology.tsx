import { motion } from "framer-motion";
import { Section } from "../../../components/ui/Section";
import { methodologySteps } from "./content";

export function Methodology() {
  return (
    <Section id="methodology" background="ivory">
      <div className="mb-14 max-w-copy">
        <h2 className="font-heading text-h1 text-ink-500">Learning Methodology</h2>
        <p className="mt-3 text-body-lg text-ink-400">How Phronesis actually teaches — the arc every module follows.</p>
      </div>
      <div className="flex flex-col gap-14">
        {methodologySteps.map((step, idx) => {
          const reversed = idx % 2 === 1;
          return (
            <div
              key={step.label}
              className={`flex flex-col tablet:flex-row items-start gap-6 ${reversed ? "tablet:flex-row-reverse" : ""}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="tablet:w-1/2"
              >
                <p className="text-label uppercase tracking-wide text-copper-700">{step.label}</p>
                <h3 className="mt-2 font-heading text-h3 text-ink-500">{step.title}</h3>
                <p className="mt-2 text-body text-ink-400">{step.description}</p>
              </motion.div>
              {idx < methodologySteps.length - 1 && (
                <div className="hidden tablet:block h-px flex-1 self-center bg-stone-300" aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
