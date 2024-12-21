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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1d4ed8", // Azul
        secondary: "#f97316", // Naranja
        neutral: "#111827", // Gris oscuro
        accent: "#9333ea", // Morado
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // Fuente personalizada
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        xxs: "0.625rem", // Tamaño extra pequeño
        xxxl: "2.25rem", // Tamaño extra grande
      },
    },
  },
  plugins: [],
};
export default config;
