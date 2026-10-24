"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";

const desserts = [
  {
    name: "Dark Chocolate Tart",
    desc: "Intense single-origin 72% dark chocolate ganache in a buttery almond crust, finished with edible gold leaf and sea salt flakes.",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80",
    tag: "Signature",
  },
  {
    name: "Matcha Tiramisu",
    desc: "A Japanese-Italian fusion — ladyfingers soaked in ceremonial matcha syrup, layered with mascarpone cream and dusted with pure matcha powder.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    tag: "Seasonal",
  },
  {
    name: "Mille-Feuille",
    desc: "Shatteringly crisp caramelized puff pastry with house-made vanilla diplomate cream and seasonal berry compote. A study in texture and precision.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80",
    tag: "Classic",
  },
  {
    name: "Pistachio Rose Éclair",
    desc: "Airy choux pastry filled with pistachio mousseline cream, glazed with rose water fondant and crushed Sicilian pistachios.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    tag: "Artisan",
  },
  {
    name: "Lotus Cheesecake",
    desc: "Silky New York-style baked cheesecake on a Lotus Biscoff crust, crowned with caramelized cookie crumble and rich caramel drizzle.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
    tag: "Bestseller",
  },
];

export default function DessertExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="desserts"
      ref={sectionRef}
      className="relative overflow-hidden py-32 lg:py-44"
      style={{ backgroundColor: "#1C1917" }}
    >
      {/* Warm background glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-1/4 right-0 w-2/3 h-2/3"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 100% 50%, rgba(120,80,40,0.08) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24 gap-8">
          <div>
            <SectionLabel label="Dessert Atelier" />
            <div className="mt-8">
              <RevealText delay={0.1}>
                <h2
                  className="text-[clamp(3rem,7vw,6rem)] font-serif font-light leading-[0.9] text-cream"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Sweet
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <h2
                  className="text-[clamp(3rem,7vw,6rem)] font-serif italic font-light leading-[0.9] text-gold"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Temptations
                </h2>
              </RevealText>
            </div>
          </div>
          <FadeIn delay={0.3} direction="up" distance={20} className="max-w-sm">
            <p className="font-sans text-sm text-bark leading-relaxed">
              Every dessert at Enzo is crafted daily by our in-house pâtissier,
              using the finest imported ingredients and time-honoured French
              technique.
            </p>
          </FadeIn>
        </div>

        {/* Featured + horizontal strip */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Large featured */}
          <FadeIn delay={0.1} direction="left" distance={50} className="lg:col-span-2">
            <div className="relative h-[55vw] lg:h-[520px] rounded-2xl overflow-hidden img-shine cursor-pointer">
              <Image
                src={desserts[activeIndex].image}
                alt={desserts[activeIndex].name}
                fill
                className="object-cover transition-transform duration-1000"
                sizes="(max-width:1024px) 100vw, 65vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,14,13,0.9) 0%, transparent 55%)",
                }}
              />
              <div className="absolute bottom-8 left-8 right-8">
                <motion.span
                  key={desserts[activeIndex].tag}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-block font-sans text-[9px] tracking-[0.35em] uppercase text-gold bg-charcoal/50 backdrop-blur px-3 py-1.5 rounded-full mb-3"
                >
                  {desserts[activeIndex].tag}
                </motion.span>
                <motion.h3
                  key={desserts[activeIndex].name + "-title"}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-serif text-3xl lg:text-4xl text-cream mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {desserts[activeIndex].name}
                </motion.h3>
                <motion.p
                  key={desserts[activeIndex].desc}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="font-sans text-sm text-sand leading-relaxed max-w-lg"
                >
                  {desserts[activeIndex].desc}
                </motion.p>
              </div>
            </div>
          </FadeIn>

          {/* Side thumbnails */}
          <FadeIn delay={0.2} direction="right" distance={40} className="flex lg:flex-col gap-4 overflow-x-auto hide-scrollbar">
            {desserts.map((d, i) => (
              <motion.button
                key={d.name}
                onClick={() => setActiveIndex(i)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex-shrink-0 w-40 lg:w-full h-28 lg:h-32 rounded-xl overflow-hidden img-shine cursor-pointer transition-all duration-300 ${
                  i === activeIndex
                    ? "ring-1 ring-gold"
                    : "opacity-60 hover:opacity-90 ring-1 ring-stone/20"
                }`}
              >
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 40vw, 20vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(15,14,13,0.7) 0%, transparent 50%)" }}
                />
                <span
                  className="absolute bottom-2 left-3 font-serif text-sm text-cream"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {d.name.split(" ").slice(0, 2).join(" ")}
                </span>
              </motion.button>
            ))}
          </FadeIn>
        </div>

        {/* Bottom strip */}
        <FadeIn delay={0.3} direction="up" distance={30}>
          <div className="divider-gold" />
          <div className="flex flex-col sm:flex-row items-center justify-between py-8 gap-4">
            <p
              className="font-serif italic text-xl text-cream/70"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              &ldquo;Every dessert tells a story.&rdquo;
            </p>
            <span className="font-sans text-xs tracking-[0.3em] text-bark uppercase">
              Baked Fresh Daily · No Preservatives
            </span>
          </div>
          <div className="divider-gold" />
        </FadeIn>
      </div>
    </section>
  );
}
