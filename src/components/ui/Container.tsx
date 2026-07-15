import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: "copy" | "section" | "narrow" | "full";
}

const widths: Record<NonNullable<ContainerProps["maxWidth"]>, string> = {
  copy: "max-w-copy",
  section: "max-w-section",
  narrow: "max-w-narrow",
  full: "max-w-none",
};

export function Container({ maxWidth = "section", className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-6 tablet:px-10 laptop:px-16", widths[maxWidth], className)} {...props}>
      {children}
    </div>
  );
}
