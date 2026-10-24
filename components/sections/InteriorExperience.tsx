"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";

const interiors = [
  {
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
    label: "The Main Hall",
    span: "col-span-2 row-span-2",
    height: "h-[500px]",
  },
  {
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=700&q=80",
    label: "The Bar",
    span: "col-span-1 row-span-1",
    height: "h-[235px]",
  },
  {
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=700&q=80",
    label: "Lounge Corner",
    span: "col-span-1 row-span-1",
    height: "h-[235px]",
  },
  {
    image: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=700&q=80",
    label: "The Garden",
    span: "col-span-1 row-span-1",
    height: "h-[280px]",
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=700&q=80",
    label: "Private Nook",
    span: "col-span-2 row-span-1",
    height: "h-[280px]",
  },
];

const attributes = [
  { title: "Minimalist Architecture", desc: "Clean lines, raw concrete, and warm oak — spaces designed to breathe." },
  { title: "Warm Ambient Lighting", desc: "Carefully curated lighting schemes that shift with the time of day." },
  { title: "Muted Green Seating", desc: "Hand-selected upholstery in sage and olive, echoing the natural world." },
  { title: "Outdoor Terrace", desc: "Al fresco seating for the golden UAE evenings — open sky, warm air." },
];

export default function InteriorExperience() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      id="interiors"
      className="relative overflow-hidden py-32 lg:py-44"
      style={{ backgroundColor: "#0F0E0D" }}
    >
      {/* Bg gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 80%, rgba(61,74,50,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <SectionLabel label="The Space" />
          <div className="mt-8 max-w-3xl">
            <RevealText delay={0.1}>
              <h2
                className="text-[clamp(3rem,7vw,6.5rem)] font-serif font-light leading-[0.9] text-cream"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                A Space That{" "}
                <span className="italic text-gold">Breathes</span>
              </h2>
            </RevealText>
          </div>
          <FadeIn delay={0.3} direction="up" distance={20} className="mt-6 max-w-xl">
            <p className="font-sans text-sm text-bark leading-relaxed">
              Designed in collaboration with award-winning UAE architects, our
              interiors are a meditation on materiality — where raw and refined
              coexist in perfect balance.
            </p>
          </FadeIn>
        </div>

        {/* Fullscreen parallax hero */}
        <FadeIn delay={0.1} direction="up" distance={60} className="mb-16">
          <div
            ref={heroRef}
            className="relative w-full h-[55vw] lg:h-[680px] rounded-2xl overflow-hidden img-shine"
          >
            <motion.div
              style={{ y: parallaxY }}
              className="absolute inset-[-15%] w-[130%] h-[130%]"
            >
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80"
                alt="Enzo Cafe main interior"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(15,14,13,0.2) 0%, rgba(15,14,13,0.1) 50%, rgba(15,14,13,0.6) 100%)",
              }}
            />
            {/* Overlay text */}
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <span
                className="font-serif italic text-3xl text-cream/80"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                &ldquo;Architecture as atmosphere.&rdquo;
              </span>
              <span className="hidden md:block font-sans text-[10px] tracking-[0.35em] text-gold uppercase">
                Abu Dhabi Flagship
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Masonry gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {interiors.slice(0, 5).map((item, i) => (
            <FadeIn key={item.label} delay={0.1 + i * 0.08} direction="up" distance={30} className={i === 0 ? "md:col-span-2" : ""}>
              <div className={`relative ${item.height} rounded-xl overflow-hidden img-shine group cursor-pointer`}>
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(15,14,13,0.75) 0%, transparent 50%)",
                  }}
                />
                <span
                  className="absolute bottom-4 left-4 font-sans text-[10px] tracking-[0.3em] text-gold uppercase"
                >
                  {item.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Attributes grid */}
        <div className="divider-gold mb-14" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {attributes.map((attr, i) => (
            <FadeIn key={attr.title} delay={0.1 + i * 0.1} direction="up" distance={25}>
              <div className="group">
                <div className="w-8 h-px bg-gold mb-5 transition-all duration-300 group-hover:w-14" />
                <h4
                  className="font-serif text-lg text-cream mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {attr.title}
                </h4>
                <p className="font-sans text-sm text-bark leading-relaxed">
                  {attr.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="divider-gold mt-14" />
      </div>
    </section>
  );
}
