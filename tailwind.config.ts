import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono:    ["DM Mono",    "monospace"],
      },
      colors: {
        // ── Brand greens ──────────────────────────────
        green: {
          50:  "#F0FAF4",
          100: "#D4EEE1",
          200: "#A8DDBE",
          300: "#72C99A",
          400: "#3FB877",
          500: "#1AAF5D",   // primary action
          600: "#0F8C47",
          700: "#0C6B37",   // deep brand green
          800: "#094E28",
          900: "#063319",
          950: "#031A0D",
        },
        // ── Neutrals ──────────────────────────────────
        slate: {
          50:  "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
        // ── Semantic shortcuts ─────────────────────────
        brand: {
          DEFAULT: "#0C6B37",
          light:   "#1AAF5D",
          pale:    "#F0FAF4",
          border:  "#A8DDBE",
          muted:   "#D4EEE1",
        },
      },
      backgroundImage: {
        "brand-gradient":    "linear-gradient(135deg, #0C6B37 0%, #1AAF5D 100%)",
        "brand-gradient-r":  "linear-gradient(135deg, #1AAF5D 0%, #0C6B37 100%)",
        "hero-radial":       "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(15,107,58,0.08) 0%, transparent 70%)",
        "section-tint":      "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(15,107,58,0.05) 0%, transparent 70%)",
        "green-shine":       "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
      },
      boxShadow: {
        "brand-sm":  "0 4px 14px rgba(12,107,55,0.18)",
        "brand":     "0 8px 32px rgba(12,107,55,0.22)",
        "brand-lg":  "0 16px 48px rgba(12,107,55,0.28)",
        "card":      "0 1px 3px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.08)",
        "card-hover":"0 4px 6px rgba(0,0,0,0.05), 0 24px 56px rgba(0,0,0,0.12), 0 0 0 1px rgba(12,107,55,0.12)",
        "nav":       "0 1px 3px rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.06)",
      },
      animation: {
        "float":          "float 6s ease-in-out infinite",
        "float-delayed":  "float 6s ease-in-out 2s infinite",
        "pulse-brand":    "pulseBrand 3s ease-in-out infinite",
        "badge-blink":    "badgeBlink 2s ease-in-out infinite",
        "shimmer":        "shimmer 2.5s linear infinite",
        "fade-up":        "fadeUp .6s cubic-bezier(.16,1,.3,1) both",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        pulseBrand: {
          "0%,100%": { opacity: "0.5", transform: "scale(1)" },
          "50%":     { opacity: "0.9", transform: "scale(1.04)" },
        },
        badgeBlink: {
          "0%,100%": { opacity: "0.5" },
          "50%":     { opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition:  "200% 0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
