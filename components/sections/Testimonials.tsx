"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Layla Al-Mansouri",
    title: "Interior Designer, Dubai",
    text: "Enzo is the only café where I genuinely slow down. The Spanish Latte is transcendent, and the space feels like it was designed for deep thought. It's become my second studio.",
    stars: 5,
    initial: "L",
  },
  {
    name: "Marcus van der Berg",
    title: "Creative Director, Abu Dhabi",
    text: "The V60 here is a religious experience. I've had specialty coffee in Tokyo, Melbourne, Copenhagen — and Enzo sits comfortably among the best. The craft is real, the attention to detail is obsessive.",
    stars: 5,
    initial: "M",
  },
  {
    name: "Fatima Hassan",
    title: "Architect & Urban Planner",
    text: "I brought my entire team here for our annual offsite. The matcha frappe alone converted three espresso purists. The ambiance holds a remarkable calm energy that's rare in the UAE.",
    stars: 5,
    initial: "F",
  },
  {
    name: "James Whitmore",
    title: "Food & Travel Writer",
    text: "In a city of spectacle, Enzo chooses restraint — and wins. The mille-feuille paired with their cold brew is one of the finest food memories I have from the Gulf region.",
    stars: 5,
    initial: "J",
  },
  {
    name: "Nour Khoury",
    title: "Fashion Editor, Vogue Arabia",
    text: "Enzo understands the language of luxury without screaming it. The textures, the light, the way the barista explains each drink — it feels like being a guest in a very discerning home.",
    stars: 5,
    initial: "N",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => {
      setCurrent((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, [autoPlay]);

  const prev = () => {
    setAutoPlay(false);
    setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setAutoPlay(false);
    setCurrent((i) => (i + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-32 lg:py-44"
      style={{ backgroundColor: "#1C1917" }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <SectionLabel label="Guest Voices" className="justify-center" />
          <div className="mt-8">
            <RevealText delay={0.1}>
              <h2
                className="text-[clamp(2.8rem,6vw,5.5rem)] font-serif font-light leading-[0.9] text-cream"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Stories of{" "}
                <span className="italic text-gold">Delight</span>
              </h2>
            </RevealText>
          </div>
        </div>

        {/* Testimonial carousel */}
        <div className="relative">
          {/* Large quote mark */}
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 font-serif text-[10rem] leading-none text-gold/[0.06] select-none pointer-events-none"
            style={{ fontFamily: "var(--font-serif)" }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="glass rounded-3xl p-10 lg:p-16 text-center max-w-4xl mx-auto">
                {/* Stars */}
                <div className="flex justify-center gap-1.5 mb-8">
                  {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className="font-serif italic text-xl lg:text-2xl text-cream/90 leading-relaxed mb-10"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  &ldquo;{testimonials[current].text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
                    <span
                      className="font-serif text-lg text-gold"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {testimonials[current].initial}
                    </span>
                  </div>
                  <span className="font-sans text-sm font-medium text-cream">
                    {testimonials[current].name}
                  </span>
                  <span className="font-sans text-xs tracking-[0.2em] text-bark uppercase">
                    {testimonials[current].title}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <FadeIn delay={0.2} direction="none" className="flex items-center justify-center gap-6 mt-10">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass-light flex items-center justify-center text-sand hover:text-gold hover:border-gold/40 transition-all duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoPlay(false); setCurrent(i); }}
                  className={`rounded-full transition-all duration-400 cursor-pointer ${
                    i === current
                      ? "w-8 h-1.5 bg-gold"
                      : "w-1.5 h-1.5 bg-stone hover:bg-sand"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass-light flex items-center justify-center text-sand hover:text-gold transition-all duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </motion.button>
          </FadeIn>
        </div>

        {/* Bottom trust line */}
        <FadeIn delay={0.3} direction="up" distance={20} className="text-center mt-16">
          <p className="font-sans text-xs tracking-[0.3em] text-bark uppercase">
            Rated 4.9 / 5 across 2,400+ reviews · Google · TripAdvisor · Zomato
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
