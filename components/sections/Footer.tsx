"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
// Custom SVG social icons (lucide-react v1 doesn't include these brand icons)

const links = {
  Menu: ["Specialty Coffee", "Matcha Collection", "Cold Beverages", "Dessert Atelier", "Seasonal Specials"],
  Visit: ["Abu Dhabi Flagship", "Dubai DIFC", "Dubai Mall", "Private Events", "Gift Cards"],
  Company: ["Our Story", "The Roastery", "Sustainability", "Careers", "Press"],
};

const SvgInstagram = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const SvgTwitter = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const SvgFacebook = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const SvgYoutube = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const socials = [
  { Icon: SvgInstagram, label: "Instagram", href: "#" },
  { Icon: SvgTwitter, label: "Twitter / X", href: "#" },
  { Icon: SvgFacebook, label: "Facebook", href: "#" },
  { Icon: SvgYoutube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden pt-24 pb-12"
      style={{ backgroundColor: "#0C0B0A" }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(201,169,110,0.3), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Ambient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 800,
          height: 400,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,169,110,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <FadeIn delay={0} direction="up" distance={20}>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer mb-6 inline-block"
                aria-label="Scroll to top"
              >
                <span
                  className="block text-4xl tracking-[0.35em] text-cream"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  ENZO
                </span>
                <span className="block text-[9px] tracking-[0.6em] text-gold font-sans font-light uppercase mt-1">
                  Café
                </span>
              </button>
            </FadeIn>
            <FadeIn delay={0.1} direction="up" distance={15}>
              <p className="font-sans text-sm text-bark leading-relaxed max-w-xs mb-8">
                Crafting moments of quiet luxury, one cup at a time. Premium
                specialty coffee and artisan desserts across the UAE.
              </p>
            </FadeIn>
            {/* Socials */}
            <FadeIn delay={0.2} direction="up" distance={15}>
              <div className="flex gap-4">
                {socials.map(({ Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    whileHover={{ y: -3, color: "#C9A96E" }}
                    transition={{ duration: 0.25 }}
                    className="w-9 h-9 rounded-full glass-light flex items-center justify-center text-sand hover:text-gold transition-colors duration-300 cursor-pointer"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items], si) => (
            <div key={section}>
              <FadeIn delay={0.1 * si} direction="up" distance={20}>
                <h5
                  className="font-display text-[10px] tracking-[0.4em] uppercase text-gold mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {section}
                </h5>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <motion.span
                        whileHover={{ x: 4, color: "#C9A96E" }}
                        transition={{ duration: 0.2 }}
                        className="font-sans text-sm text-bark hover:text-gold transition-colors duration-300 cursor-pointer block"
                      >
                        {item}
                      </motion.span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gold mb-8" />

        {/* Bottom bar */}
        <FadeIn delay={0.2} direction="none">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-stone">
              © {new Date().getFullYear()} Enzo Café LLC. All rights reserved. UAE.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                <span
                  key={item}
                  className="font-sans text-xs text-stone hover:text-sand transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Large background wordmark */}
        <div className="mt-12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <span
              className="block text-[20vw] font-serif font-light leading-none text-cream/[0.03] select-none pointer-events-none"
              style={{ fontFamily: "var(--font-serif)" }}
              aria-hidden="true"
            >
              ENZO
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
