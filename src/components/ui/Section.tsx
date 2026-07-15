import type { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { revealVariants } from "../../animations/variants";
import { Container, type ContainerProps } from "./Container";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: "ivory" | "linen" | "forest-dark" | "rosewood";
  maxWidth?: ContainerProps["maxWidth"];
  animateOnScroll?: boolean;
  id?: string;
}

const backgrounds: Record<NonNullable<SectionProps["background"]>, string> = {
  ivory: "bg-ivory-25 text-ink-500",
  linen: "bg-linen-50 text-ink-500",
  "forest-dark": "bg-forest-900 text-ivory-25",
  rosewood: "bg-rosewood-100 text-ink-500",
};

export function Section({
  background = "ivory",
  maxWidth = "section",
  animateOnScroll = true,
  id,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn(
        "relative py-14 tablet:py-20 laptop:py-30 overflow-hidden",
        backgrounds[background],
        className
      )}
      initial={animateOnScroll ? "hidden" : undefined}
      whileInView={animateOnScroll ? "visible" : undefined}
      viewport={{ once: true, amount: 0.2 }}
      variants={animateOnScroll ? revealVariants : undefined}
      {...(props as any)}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </motion.section>
  );
}
