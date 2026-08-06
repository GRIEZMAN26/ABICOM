import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1E36",
        "navy-light": "#11294A",
        orange: "#E87A20",
        "orange-light": "#F5973D",
        "gray-light": "#F4F6F9",
        "text-gray": "#5B6573",
      },
      fontFamily: {
        heading: ["Montserrat", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(11,30,54,0.18)",
        glow: "0 0 30px -5px rgba(232,122,32,0.45)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp .6s ease-out both",
        floaty: "floaty 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
