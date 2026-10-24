"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 500);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#0F0E0D" }}
        >
          {/* Grain */}
          <div className="grain-overlay" aria-hidden="true" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <span
              className="block text-5xl tracking-[0.4em] text-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ENZO
            </span>
            <span className="block text-[10px] tracking-[0.6em] text-gold font-sans font-light uppercase mt-2">
              Café
            </span>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-px bg-stone/30 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gold"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>

          {/* Progress number */}
          <motion.span
            className="mt-4 font-sans text-[10px] tracking-[0.3em] text-bark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.min(Math.floor(progress), 100)}
          </motion.span>

          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,169,110,0.04) 0%, transparent 70%)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
