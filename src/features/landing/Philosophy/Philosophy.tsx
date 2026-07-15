import { motion } from "framer-motion";
import { Section } from "../../../components/ui/Section";
import { philosophyContent } from "./content";

export function Philosophy() {
  return (
    <Section id="philosophy" background="linen">
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-12 tablet:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-body-lg text-ink-500 leading-relaxed">{philosophyContent.statement}</p>
          <p className="mt-6 text-mono-detail text-ink-400 italic">{philosophyContent.etymology}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex items-center justify-center"
        >
          <svg viewBox="0 0 240 240" className="w-full max-w-xs text-forest-500" aria-hidden="true">
            <circle cx="70" cy="120" r="1.5" fill="currentColor" />
            <circle cx="170" cy="60" r="1.5" fill="currentColor" />
            <circle cx="170" cy="180" r="1.5" fill="currentColor" />
            <line x1="70" y1="120" x2="170" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="70" y1="120" x2="170" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="170" y1="60" x2="170" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <circle cx="120" cy="120" r="4" fill="#B87333" />
          </svg>
        </motion.div>
      </div>
    </Section>
  );
}
