"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowRight } from "lucide-react";

const drinks = [
  {
    id: "spanish-latte",
    name: "Spanish Latte",
    tagline: "Velvety richness",
    description:
      "Double-shot specialty espresso layered over sweetened condensed milk, topped with silky microfoam. A bold harmony of bitter and sweet.",
    origin: "House Blend · Medium Roast",
    price: "28",
    image: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=700&q=80",
    accent: "rgba(201,169,110,0.15)",
    category: "Espresso",
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    tagline: "Ceremonial elegance",
    description:
      "Premium ceremonial-grade Japanese matcha whisked to a smooth vivid paste, poured over steamed oat milk with a delicate floral finish.",
    origin: "Uji, Kyoto · Japan",
    price: "30",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=700&q=80",
    accent: "rgba(107,124,94,0.2)",
    category: "Matcha",
  },
  {
    id: "matcha-frappe",
    name: "Matcha Frappe",
    tagline: "Iced serenity",
    description:
      "Ceremonial matcha blended with cold milk, natural sweetener, and ice — finished with a cloud of house-made vanilla cream.",
    origin: "Ceremonial Grade · Seasonal",
    price: "32",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=700&q=80",
    accent: "rgba(143,175,126,0.15)",
    category: "Matcha",
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    tagline: "18-hour patience",
    description:
      "Single-origin beans slow-steeped for 18 hours in cold filtered water. Deep, complex, utterly smooth — no bitterness, pure essence.",
    origin: "Ethiopia Yirgacheffe · Light Roast",
    price: "29",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&q=80",
    accent: "rgba(44,40,36,0.3)",
    category: "Espresso",
  },
  {
    id: "v60",
    name: "V60 Pour Over",
    tagline: "Precision in every pour",
    description:
      "A meditative ritual — ground to order, bloomed, then poured in precise concentric spirals over 3 minutes. Clarity and complexity in every cup.",
    origin: "Rotating Single-Origin",
    price: "35",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80",
    accent: "rgba(120,113,108,0.2)",
    category: "Filter",
  },
  {
    id: "acai-smoothie",
    name: "Açaí Smoothie",
    tagline: "Vivid vitality",
    description:
      "Wild-harvested Brazilian açaí blended with frozen banana, coconut milk, and a touch of raw honey. Rich, earthy, and deeply nourishing.",
    origin: "Pará, Brazil · Wild Harvested",
    price: "34",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=700&q=80",
    accent: "rgba(80,40,100,0.15)",
    category: "Wellness",
  },
];

const categories = ["All", "Espresso", "Matcha", "Filter", "Wellness"];

export default function SignatureDrinks() {
  const [active, setActive] = useState<(typeof drinks)[0]>(drinks[0]);
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered =
    filter === "All" ? drinks : drinks.filter((d) => d.category === filter);

  return (
    <section
      id="drinks"
      className="relative overflow-hidden py-32 lg:py-44"
      style={{ background: "linear-gradient(180deg, #0F0E0D 0%, #1C1917 50%, #0F0E0D 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: active.accent,
          filter: "blur(80px)",
          transition: "background 0.8s ease",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <SectionLabel label="Signature Menu" className="justify-center" />
          <div className="mt-8 overflow-hidden">
            <RevealText delay={0.1}>
              <h2
                className="text-[clamp(3rem,7vw,6.5rem)] font-serif font-light leading-[0.9] text-cream"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Crafted to{" "}
                <span className="italic text-gold">Inspire</span>
              </h2>
            </RevealText>
          </div>
          <FadeIn delay={0.3} direction="up" distance={20}>
            <p className="mt-6 font-sans text-sm text-bark tracking-wide max-w-lg mx-auto leading-relaxed">
              Each drink is a thoughtful composition — carefully sourced,
              precisely prepared, and beautifully presented.
            </p>
          </FadeIn>
        </div>

        {/* Category filters */}
        <FadeIn delay={0.2} direction="up" distance={20} className="flex justify-center gap-3 flex-wrap mb-14">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileTap={{ scale: 0.96 }}
              className={`px-5 py-2 rounded-full font-sans text-xs tracking-[0.2em] uppercase cursor-pointer transition-all duration-300 ${
                filter === cat
                  ? "bg-gold text-charcoal"
                  : "glass-light text-sand hover:text-cream hover:border-gold/30"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </FadeIn>

        {/* Split layout: active + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Featured active drink */}
          <FadeIn delay={0.1} direction="left" distance={40} className="lg:col-span-2 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden img-shine mb-6">
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-cover transition-transform duration-700"
                    sizes="(max-width:1024px) 100vw, 40vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,14,13,0.8) 0%, rgba(15,14,13,0.1) 60%)",
                    }}
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block font-sans text-[9px] tracking-[0.3em] uppercase text-gold bg-charcoal/60 backdrop-blur px-3 py-1 rounded-full mb-2">
                      {active.category}
                    </span>
                    <h3
                      className="text-3xl font-serif font-light text-cream"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {active.name}
                    </h3>
                  </div>
                </div>
                <p className="font-sans text-sm text-sand leading-relaxed mb-4">
                  {active.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] tracking-[0.3em] text-bark uppercase">
                    {active.origin}
                  </span>
                  <span
                    className="font-serif text-2xl text-gold"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    AED {active.price}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </FadeIn>

          {/* Drinks grid */}
          <div ref={containerRef} className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence>
              {filtered.map((drink, i) => (
                <motion.div
                  key={drink.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setActive(drink)}
                  onHoverStart={() => setHovered(drink.id)}
                  onHoverEnd={() => setHovered(null)}
                  className={`relative cursor-pointer rounded-xl overflow-hidden group transition-all duration-300 ${
                    active.id === drink.id
                      ? "ring-1 ring-gold/50"
                      : "ring-1 ring-stone/20 hover:ring-gold/30"
                  }`}
                  style={{ minHeight: 200 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={drink.image}
                      alt={drink.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width:640px) 100vw, 25vw"
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(15,14,13,0.85) 0%, rgba(15,14,13,0.1) 60%)",
                        opacity: active.id === drink.id ? 0.9 : 0.6,
                      }}
                    />
                    {/* Active indicator */}
                    {active.id === drink.id && (
                      <motion.div
                        layoutId="active-dot"
                        className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gold"
                      />
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="block font-sans text-[9px] tracking-[0.3em] uppercase text-gold mb-1">
                      {drink.tagline}
                    </span>
                    <div className="flex items-center justify-between">
                      <h3
                        className="font-serif text-lg text-cream"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {drink.name}
                      </h3>
                      <motion.div
                        animate={{ x: hovered === drink.id ? 3 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight size={14} className="text-gold" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
