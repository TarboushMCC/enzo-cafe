"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  once?: boolean;
}

export default function RevealText({
  children,
  className,
  delay = 0,
  duration = 0.9,
  as: Tag = "div",
  once = true,
}: RevealTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ y: "102%", opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: "102%", opacity: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Tag>{children}</Tag>
      </motion.div>
    </div>
  );
}
