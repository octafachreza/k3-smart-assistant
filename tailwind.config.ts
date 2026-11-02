import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#101d36",
          900: "#172642",
          800: "#203452",
          700: "#2b4668",
        },
        brand: {
          50: "#eff8ff",
          100: "#dcefff",
          500: "#2585d8",
          600: "#176fc0",
        },
        safety: "#22a778",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(27, 47, 74, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
