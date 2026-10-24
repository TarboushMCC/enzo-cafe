"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Story", href: "#about" },
  { label: "Drinks", href: "#drinks" },
  { label: "Desserts", href: "#desserts" },
  { label: "Interiors", href: "#interiors" },
  { label: "Reserve", href: "#reservation" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass py-3 mx-4 mt-3 rounded-2xl"
            : "bg-transparent py-6 mx-6 mt-0"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="cursor-pointer"
            whileHover={{ opacity: 0.8 }}
          >
            <span
              className="text-2xl tracking-[0.25em] text-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ENZO
            </span>
            <span className="block text-[9px] tracking-[0.5em] text-gold font-sans font-light uppercase mt-0.5">
              Café
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {links.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative font-sans text-xs tracking-[0.2em] uppercase text-sand hover:text-cream transition-colors duration-300 cursor-pointer group"
                whileHover={{ y: -1 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              onClick={() => scrollTo("#reservation")}
              className="font-sans text-xs tracking-[0.2em] uppercase px-6 py-2.5 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Table
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-cream cursor-pointer p-1"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-10"
          >
            {links.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={() => scrollTo(link.href)}
                className="font-serif text-4xl text-cream hover:text-gold transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07 }}
              onClick={() => scrollTo("#reservation")}
              className="mt-6 font-sans text-xs tracking-[0.2em] uppercase px-8 py-3 rounded-full border border-gold/50 text-gold cursor-pointer"
            >
              Book a Table
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
