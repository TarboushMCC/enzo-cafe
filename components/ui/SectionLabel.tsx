"use client";

import { cn } from "@/lib/utils";
import FadeIn from "./FadeIn";

interface SectionLabelProps {
  label: string;
  className?: string;
  delay?: number;
}

export default function SectionLabel({ label, className, delay = 0 }: SectionLabelProps) {
  return (
    <FadeIn delay={delay} direction="none">
      <div className={cn("flex items-center gap-4", className)}>
        <span className="block w-8 h-px bg-gold opacity-70" />
        <span
          className="font-display text-xs tracking-[0.3em] uppercase text-gold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {label}
        </span>
        <span className="block w-8 h-px bg-gold opacity-70" />
      </div>
    </FadeIn>
  );
}
