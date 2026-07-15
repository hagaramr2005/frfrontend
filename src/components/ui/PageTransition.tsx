import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { pageTransitionVariants } from "../../animations/variants";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransitionVariants}>
      {children}
    </motion.div>
  );
}
