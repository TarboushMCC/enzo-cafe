"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  variant?: "gold" | "outline" | "ghost";
  as?: "button" | "a";
}

export default function MagneticButton({
  children,
  className,
  strength = 0.35,
  onClick,
  href,
  variant = "gold",
  as = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const onMouseLeave = () => setPos({ x: 0, y: 0 });

  const variantStyles = {
    gold: "bg-gold text-charcoal hover:bg-gold-light",
    outline:
      "border border-gold/50 text-gold hover:border-gold hover:bg-gold/10",
    ghost: "text-cream hover:text-gold",
  };

  const Tag = as === "a" ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      className="inline-flex"
    >
      <Tag
        href={href as string}
        onClick={onClick}
        whileTap={{ scale: 0.96 }}
        className={cn(
          "relative inline-flex items-center justify-center gap-3 px-8 py-4",
          "font-sans text-sm tracking-[0.15em] uppercase font-medium",
          "rounded-full transition-all duration-300 cursor-pointer",
          "overflow-hidden",
          variantStyles[variant],
          className
        )}
      >
        <span className="relative z-10 flex items-center gap-3">{children}</span>
      </Tag>
    </motion.div>
  );
}
