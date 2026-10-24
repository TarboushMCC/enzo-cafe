// Tailwind v4 uses CSS-based configuration in globals.css (@theme directive)
// This file is kept for IDE type support only
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0F0E0D",
        espresso: "#1C1917",
        mocha: "#292524",
        stone: "#44403C",
        bark: "#78716C",
        sand: "#A8A29E",
        cream: "#F5F0E8",
        warmwhite: "#FAF8F5",
        olive: "#3D4A32",
        sage: "#6B7C5E",
        matcha: "#8FAF7E",
        gold: "#C9A96E",
        "gold-light": "#E8D5B0",
        mist: "#D4CFC8",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        display: ["var(--font-playfair)", "Playfair Display SC", "serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(4rem,10vw,9rem)", { lineHeight: "0.95" }],
        "display-xl": ["clamp(3rem,7vw,7rem)", { lineHeight: "0.95" }],
        "display-lg": ["clamp(2.5rem,5vw,5rem)", { lineHeight: "1.05" }],
        "display-md": ["clamp(2rem,4vw,3.5rem)", { lineHeight: "1.1" }],
        "display-sm": ["clamp(1.5rem,3vw,2.5rem)", { lineHeight: "1.15" }],
      },
      spacing: {
        "section": "8rem",
        "section-sm": "5rem",
      },
      backgroundImage: {
        "grain": "url('/noise.png')",
        "gradient-luxury": "linear-gradient(135deg, #0F0E0D 0%, #1C1917 50%, #292524 100%)",
        "gradient-warm": "linear-gradient(180deg, #1C1917 0%, #292524 60%, #1C1917 100%)",
      },
      boxShadow: {
        "luxury": "0 25px 60px -15px rgba(0,0,0,0.6)",
        "glow-gold": "0 0 40px rgba(201,169,110,0.15)",
        "glow-sage": "0 0 40px rgba(107,124,94,0.2)",
        "card": "0 8px 32px rgba(0,0,0,0.4)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.6)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "grain": "grain 8s steps(10) infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-2%,-3%)" },
          "20%": { transform: "translate(2%,1%)" },
          "30%": { transform: "translate(-1%,3%)" },
          "40%": { transform: "translate(3%,-1%)" },
          "50%": { transform: "translate(-2%,2%)" },
          "60%": { transform: "translate(1%,-2%)" },
          "70%": { transform: "translate(-3%,1%)" },
          "80%": { transform: "translate(2%,3%)" },
          "90%": { transform: "translate(-1%,-1%)" },
        },
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "cinema": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      backdropBlur: {
        xs: "2px",
        "2xl": "40px",
      },
    },
  },
  plugins: [],
};

export default config;
