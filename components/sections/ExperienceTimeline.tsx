"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Origin",
    subtitle: "The Bean",
    description:
      "We travel to the world's finest growing regions — Ethiopia, Colombia, Japan — to source only specialty-grade beans with unique flavour profiles and ethical provenance.",
    accent: "rgba(201,169,110,0.08)",
    tag: "Farm to Warehouse",
  },
  {
    number: "02",
    title: "Roastery",
    subtitle: "The Craft",
    description:
      "Our roasting team obsesses over development time, airflow, and temperature curves. Each batch is small, intentional, and roasted to unlock — never mask — the bean's natural character.",
    accent: "rgba(107,124,94,0.1)",
    tag: "Dubai Roastery",
  },
  {
    number: "03",
    title: "Preparation",
    subtitle: "The Ritual",
    description:
      "Our baristas are trained in precision extraction. Every grind size, water temperature, and pour technique is calibrated to the specific bean and method — be it V60, espresso, or cold brew.",
    accent: "rgba(120,80,40,0.1)",
    tag: "In-House Training",
  },
  {
    number: "04",
    title: "Presentation",
    subtitle: "The Moment",
    description:
      "The final pour is a ceremony. Served in hand-thrown ceramic vessels, in a space designed to slow you down — the cup arrives as a complete sensory experience.",
    accent: "rgba(61,74,50,0.1)",
    tag: "Every Cup",
  },
];

export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative overflow-hidden py-32 lg:py-44"
      style={{ background: "linear-gradient(180deg, #1C1917 0%, #0F0E0D 100%)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(201,169,110,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-32">
          <SectionLabel label="The Journey" className="justify-center" />
          <div className="mt-8">
            <RevealText delay={0.1}>
              <h2
                className="text-[clamp(3rem,7vw,6.5rem)] font-serif font-light leading-[0.9] text-cream"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                From Bean{" "}
                <span className="italic text-gold">to Experience</span>
              </h2>
            </RevealText>
          </div>
          <FadeIn delay={0.3} direction="up" distance={20}>
            <p className="mt-6 font-sans text-sm text-bark max-w-lg mx-auto leading-relaxed">
              Every cup of Enzo coffee represents four chapters of dedication,
              passion, and relentless pursuit of perfection.
            </p>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div
            ref={lineRef}
            className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-stone/20"
            aria-hidden="true"
          >
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-gold to-sage origin-top"
            />
          </div>

          {/* Steps */}
          <div className="space-y-20 lg:space-y-32">
            {steps.map((step, i) => {
              const isRight = i % 2 === 0;
              return (
                <FadeIn
                  key={step.number}
                  delay={0}
                  direction={isRight ? "right" : "left"}
                  distance={50}
                  className={`relative flex items-center ${
                    isRight ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-row gap-10 lg:gap-0`}
                >
                  {/* Number dot */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-gold ring-4 ring-charcoal ring-offset-0 relative">
                      <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-20" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-20 lg:ml-0 ${
                      isRight
                        ? "lg:pr-16 lg:text-right lg:w-1/2"
                        : "lg:pl-16 lg:w-1/2 lg:ml-auto"
                    }`}
                  >
                    <div
                      className="glass rounded-2xl p-8 relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${step.accent}, rgba(28,25,23,0.8))` }}
                    >
                      {/* Big number bg */}
                      <span
                        className={`absolute top-4 font-serif text-8xl font-light text-cream/[0.04] select-none pointer-events-none ${
                          isRight ? "right-4" : "left-4"
                        }`}
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {step.number}
                      </span>

                      <span className="block font-sans text-[9px] tracking-[0.4em] uppercase text-gold mb-3">
                        {step.tag}
                      </span>
                      <span
                        className="block font-serif text-4xl font-light text-cream mb-1"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {step.title}
                      </span>
                      <span
                        className="block font-serif italic text-lg text-gold mb-5"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {step.subtitle}
                      </span>
                      <p className="font-sans text-sm text-sand leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other half */}
                  <div className="hidden lg:block lg:w-1/2" />
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
