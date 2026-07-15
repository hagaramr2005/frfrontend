import { motion } from "framer-motion";
import { Section } from "../../../components/ui/Section";
import { Button } from "../../../components/ui/Button";
import { staggerContainer, staggerChild } from "../../../animations/variants";
import { scrollToSection } from "../../../utils/scrollToSection";
import { heroContent } from "./content";

export function Hero() {
  return (
    <Section id="hero" background="ivory" animateOnScroll={false} className="min-h-[640px] flex items-center pt-30">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 opacity-[0.06]"
        viewBox="0 0 200 200"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1={i * 20} y1="200" x2="200" y2={i * 20} stroke="#2E4F3E" strokeWidth="1" />
        ))}
      </svg>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.07)}
        className="relative z-10 mx-auto flex max-w-copy flex-col items-center gap-6 text-center"
      >
        <motion.p variants={staggerChild} className="text-label uppercase tracking-wide text-forest-500">
          {heroContent.eyebrow}
        </motion.p>
        <motion.h1 variants={staggerChild} className="font-heading text-display-1 text-ink-500">
          {heroContent.headline}
        </motion.h1>
        <motion.p variants={staggerChild} className="max-w-[560px] text-body-lg text-ink-400">
          {heroContent.subhead}
        </motion.p>
        <motion.div variants={staggerChild} className="mt-2 flex flex-col tablet:flex-row items-center gap-4">
          <Button variant="primary" size="lg" onClick={() => (window.location.href = "/apply")}>
            {heroContent.ctaPrimary}
          </Button>
          <Button variant="tertiary" onClick={() => scrollToSection("philosophy")}>
            {heroContent.ctaSecondary}
          </Button>
        </motion.div>
        <motion.div variants={staggerChild} className="mt-10 flex flex-col items-center gap-2" aria-hidden="true">
          <span className="relative h-14 w-px bg-stone-400/60 overflow-hidden">
            <motion.span
              className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-stone-400"
              animate={{ y: [0, 48, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>
      </motion.div>
    </Section>
  );
}
