import { motion } from "framer-motion";
import { Section } from "../../../components/ui/Section";
import { flagshipProjects } from "./content";

export function Projects() {
  return (
    <Section id="projects" background="ivory">
      <div className="mb-14 max-w-copy">
        <h2 className="font-heading text-h1 text-ink-500">Projects</h2>
        <p className="mt-3 text-body-lg text-ink-400">A closer look at two flagship, capstone-style projects.</p>
      </div>
      <div className="flex flex-col gap-20 tablet:gap-40">
        {flagshipProjects.map((project, idx) => {
          const reversed = idx % 2 === 1;
          return (
            <div key={project.id} className={`grid grid-cols-1 tablet:grid-cols-2 gap-10 items-center ${reversed ? "tablet:[direction:rtl]" : ""}`}>
              <motion.div
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="tablet:[direction:ltr]"
              >
                <h3 className="font-heading text-h2 text-ink-500">{project.title}</h3>
                <p className="mt-4 text-body text-ink-400">{project.description}</p>
              </motion.div>
              <div className="tablet:[direction:ltr] aspect-video rounded-md bg-linen-50 border border-stone-300 flex items-center justify-center">
                <svg viewBox="0 0 200 120" className="w-2/3 text-forest-500" aria-hidden="true">
                  <rect x="10" y="10" width="180" height="100" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="60" cy="60" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M90 60 H150 M150 60 L135 48 M150 60 L135 72" stroke="#B87333" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
