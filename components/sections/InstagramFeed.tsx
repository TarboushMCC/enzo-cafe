"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import { Heart, MessageCircle } from "lucide-react";
const SvgInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const posts = [
  {
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    likes: "1.2k",
    comments: "48",
    caption: "Morning ritual ☕",
  },
  {
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80",
    likes: "2.4k",
    comments: "91",
    caption: "Matcha season ✨",
  },
  {
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
    likes: "983",
    comments: "35",
    caption: "Dark chocolate dreams",
  },
  {
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    likes: "3.1k",
    comments: "127",
    caption: "Our Dubai location",
  },
  {
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&q=80",
    likes: "1.8k",
    comments: "62",
    caption: "Behind the bar",
  },
  {
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
    likes: "2.2k",
    comments: "78",
    caption: "Crafted with intention",
  },
  {
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    likes: "1.5k",
    comments: "53",
    caption: "Cold brew obsession",
  },
  {
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80",
    likes: "875",
    comments: "29",
    caption: "Pistachio eclair 🌿",
  },
];

export default function InstagramFeed() {
  return (
    <section
      id="instagram"
      className="relative overflow-hidden py-32 lg:py-44"
      style={{ backgroundColor: "#0F0E0D" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-20">
          <SectionLabel label="@enzocafe.ae" className="justify-center" />
          <div className="mt-8">
            <RevealText delay={0.1}>
              <h2
                className="text-[clamp(2.5rem,6vw,5.5rem)] font-serif font-light leading-[0.9] text-cream"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Life at{" "}
                <span className="italic text-gold">Enzo</span>
              </h2>
            </RevealText>
          </div>
          <FadeIn delay={0.3} direction="up" distance={15}>
            <p className="mt-5 font-sans text-sm text-bark max-w-md mx-auto leading-relaxed">
              Follow our story on Instagram — moments of craft, calm, and
              connection captured daily.
            </p>
          </FadeIn>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {posts.map((post, i) => (
            <FadeIn
              key={i}
              delay={0.05 * i}
              direction="up"
              distance={30}
              className="break-inside-avoid"
            >
              <motion.div
                className="relative overflow-hidden rounded-xl group cursor-pointer img-shine"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: i % 3 === 0 ? "1/1.3" : "1/1" }}
                >
                  <Image
                    src={post.image}
                    alt={post.caption}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width:768px) 50vw, 25vw"
                  />

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                    style={{ background: "rgba(15,14,13,0.65)" }}
                  >
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5 text-cream">
                        <Heart size={16} className="fill-cream" />
                        <span className="font-sans text-sm font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-cream">
                        <MessageCircle size={16} />
                        <span className="font-sans text-sm font-medium">{post.comments}</span>
                      </div>
                    </div>
                    <span className="font-sans text-xs text-sand text-center px-4">
                      {post.caption}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Follow CTA */}
        <FadeIn delay={0.3} direction="up" distance={20} className="text-center mt-14">
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass font-sans text-xs tracking-[0.2em] uppercase text-cream hover:text-gold transition-colors duration-300 cursor-pointer"
          >
            <SvgInstagram />
            Follow @enzocafe.ae
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
