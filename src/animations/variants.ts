import { motion as tokens } from "../theme/tokens";

/** Macro reveal — page load & scroll-reveal share this exact signature. */
export const revealVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: tokens.duration.slow, ease: tokens.easing.emphasized },
  },
};

/** Route-level page transition — same signature as revealVariants, applied to the outlet. */
export const pageTransitionVariants = {
  initial: { opacity: 0, y: 12, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: tokens.duration.slow, ease: tokens.easing.emphasized },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: "blur(2px)",
    transition: { duration: tokens.duration.normal, ease: tokens.easing.standard },
  },
};

/** Stagger container for hero / any sibling sequence. 70ms per spec. */
export const staggerContainer = (stagger = 0.07) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
});

export const staggerChild = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: tokens.duration.slow, ease: tokens.easing.emphasized },
  },
};

/** Micro interaction — hover/focus/press. */
export const microTransition = {
  duration: tokens.duration.fast,
  ease: tokens.easing.standard,
};

export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: tokens.duration.reduced } },
};
