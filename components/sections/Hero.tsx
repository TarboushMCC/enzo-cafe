"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowDown } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const springX = useSpring(0, { stiffness: 60, damping: 25 });
  const springY = useSpring(0, { stiffness: 60, damping: 25 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      springX.set(x);
      springY.set(y);
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [springX, springY]);

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2600);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#0F0E0D" }}
    >
      {/* Background images with parallax */}
      <motion.div
        style={{ y: yBg, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={imgIndex}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <motion.div
              style={{ x: springX, y: springY }}
              className="absolute inset-[-3%] w-[106%] h-[106%]"
            >
              <Image
                src={heroImages[imgIndex]}
                alt="Enzo Cafe atmosphere"
                fill
                priority
                className="object-cover"
                sizes="100vw"
                onLoad={() => {}}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Multi-layer overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,14,13,0.3) 0%, rgba(15,14,13,0.45) 40%, rgba(15,14,13,0.7) 80%, rgba(15,14,13,0.95) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(15,14,13,0.4) 100%)",
          }}
        />
      </motion.div>

      {/* Ambient light orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Content */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            style={{ y: textY, opacity }}
            className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <span className="block w-10 h-px bg-gold opacity-60" />
              <span
                className="text-[10px] tracking-[0.5em] text-gold uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Specialty Café · UAE
              </span>
              <span className="block w-10 h-px bg-gold opacity-60" />
            </motion.div>

            {/* Main heading */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-[clamp(4.5rem,12vw,10rem)] leading-[0.88] font-serif italic font-light text-cream tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Crafted
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-[clamp(4.5rem,12vw,10rem)] leading-[0.88] font-serif font-light text-gold tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Moments
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-sans text-sm md:text-base tracking-[0.25em] text-sand uppercase mb-12 max-w-md mx-auto"
            >
              Elevated Coffee · Artisan Desserts · Luxury Ambiance
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              <MagneticButton
                variant="gold"
                onClick={() => document.querySelector("#drinks")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore the Menu
              </MagneticButton>
              <MagneticButton
                variant="outline"
                onClick={() => document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" })}
              >
                Reserve a Table
              </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image dots */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2"
      >
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setImgIndex(i)}
            className={`w-6 h-px cursor-pointer transition-all duration-500 ${
              i === imgIndex ? "bg-gold w-10" : "bg-sand/40"
            }`}
            aria-label={`View image ${i + 1}`}
          />
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollDown}
        className="absolute bottom-10 right-8 z-20 flex flex-col items-center gap-3 cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="font-sans text-[9px] tracking-[0.4em] text-bark uppercase rotate-90 group-hover:text-gold transition-colors duration-300">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-gold" />
        </motion.div>
      </motion.button>

      {/* Side text */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.8 }}
        className="absolute left-6 bottom-1/2 translate-y-1/2 z-20 hidden lg:block"
      >
        <span
          className="text-[9px] tracking-[0.5em] text-bark uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Abu Dhabi · Dubai · UAE
        </span>
      </motion.div>
    </section>
  );
}
