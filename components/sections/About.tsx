"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  { value: "2019", label: "Established" },
  { value: "12+", label: "Signature Drinks" },
  { value: "3", label: "UAE Locations" },
  { value: "100%", label: "Specialty Grade" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["-4%", "0%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-32 lg:py-44"
      style={{ backgroundColor: "#0F0E0D" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 90% 50%, rgba(61,74,50,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <div className="mb-16 lg:mb-24">
          <SectionLabel label="Our Story" />
        </div>

        {/* Main grid: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <motion.div style={{ x: textX }} className="order-2 lg:order-1">
            <div className="mb-8">
              <RevealText as="h2" delay={0.1}>
                <span
                  className="block text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.92] font-serif font-light text-cream"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Where Coffee
                </span>
              </RevealText>
              <RevealText as="h2" delay={0.2}>
                <span
                  className="block text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.92] font-serif italic font-light text-gold"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Becomes Art
                </span>
              </RevealText>
            </div>

            <FadeIn delay={0.3} direction="up" distance={30}>
              <p className="font-sans text-sand text-base leading-[1.85] mb-6 max-w-xl">
                Enzo Café was born from a singular obsession — the belief that a
                great cup of coffee is not merely a drink, but a carefully
                orchestrated experience. Every detail, from the sourcing of our
                single-origin beans to the architecture of our spaces, is
                designed to elevate the everyday into something extraordinary.
              </p>
              <p className="font-sans text-bark text-sm leading-[1.85] mb-10 max-w-xl">
                Nestled in the heart of the UAE, our cafés blend minimalist
                contemporary interiors with warm, intimate atmosphere — spaces
                where time slows and every sip invites you deeper into the
                moment.
              </p>
            </FadeIn>

            {/* Divider */}
            <FadeIn delay={0.4} direction="none">
              <div className="divider-gold w-24 mb-10" />
            </FadeIn>

            {/* Quote */}
            <FadeIn delay={0.5} direction="up" distance={20}>
              <blockquote className="relative pl-6">
                <span
                  className="absolute left-0 top-0 bottom-0 w-px bg-gold opacity-40"
                />
                <p
                  className="font-serif italic text-xl text-cream/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  &ldquo;We don&apos;t just serve coffee — we craft moments
                  worth remembering.&rdquo;
                </p>
                <cite className="block mt-3 font-sans text-xs tracking-[0.25em] text-gold uppercase not-italic">
                  — Enzo, Founder
                </cite>
              </blockquote>
            </FadeIn>
          </motion.div>

          {/* Right: Images */}
          <div className="order-1 lg:order-2 relative h-[70vw] lg:h-[650px]">
            {/* Main large image */}
            <FadeIn delay={0.1} direction="right" distance={50} className="absolute top-0 right-0 w-[75%] h-[80%] z-10">
              <div className="relative w-full h-full rounded-2xl overflow-hidden img-shine shadow-luxury">
                <motion.div style={{ y: imgY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
                  <Image
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80"
                    alt="Specialty coffee craftsmanship at Enzo Cafe"
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 80vw, 40vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(15,14,13,0.6) 100%)" }}
                  />
                </motion.div>
              </div>
            </FadeIn>

            {/* Secondary accent image */}
            <FadeIn delay={0.3} direction="up" distance={40} className="absolute bottom-0 left-0 w-[48%] h-[48%] z-20">
              <div className="relative w-full h-full rounded-xl overflow-hidden img-shine shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80"
                  alt="Artisan matcha preparation at Enzo Cafe"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(15,14,13,0.5) 0%, transparent 60%)" }}
                />
              </div>
            </FadeIn>

            {/* Floating badge */}
            <FadeIn delay={0.5} direction="none" className="absolute top-8 left-6 z-30">
              <div className="glass rounded-xl px-5 py-4 text-center">
                <span
                  className="block text-2xl font-serif font-light text-gold"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  5★
                </span>
                <span className="block text-[9px] tracking-[0.3em] text-sand font-sans uppercase mt-1">
                  Rated Experience
                </span>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats bar */}
        <FadeIn delay={0.2} direction="up" distance={40} className="mt-24 lg:mt-32">
          <div className="divider-gold mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={0.1 * i} direction="up" distance={20}>
                <div className="text-center">
                  <span
                    className="block text-4xl lg:text-5xl font-serif font-light text-gold mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="block text-xs tracking-[0.25em] text-bark font-sans uppercase">
                    {stat.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="divider-gold mt-10" />
        </FadeIn>
      </div>
    </section>
  );
}
