import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "black-bg": "#070707",
        "neon-greenish": "#54fddf",
        "neon-blue": "#01a4d5",
        "neon-dark-blue": "#313b3e",
        "neon-black": "#222527",
        "very-light-gray": "#f9f9f9",
        "medium-gray": "#555555",

      },
    },
  },
  plugins: [],
} satisfies Config;
