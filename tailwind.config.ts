import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0d",
        paper: "#f6f1e8",
        accent: "#d1a36a",
        line: "rgba(255,255,255,0.12)"
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 80px rgba(209,163,106,0.18)",
        soft: "0 18px 50px rgba(0,0,0,0.24)"
      }
    }
  },
  plugins: []
} satisfies Config;
