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
        background: "var(--background)", // Fondo global (puedes mantenerlo dinámico)
        foreground: "var(--foreground)", // Texto global (puedes mantenerlo dinámico)

        // Colores extraídos del logo
        primary: "#e7e7e9", // Color gris claro dominante
        secondary: "#e7e7e8", // Segundo tono de gris claro
        accent1: "#e7e6e9", // Acento 1 (gris claro con sutil variación)
        accent2: "#e7e6ea", // Acento 2 (gris claro con otro matiz)
        neutral: "#e7e7e7", // Color neutral extraído

        // Colores adicionales (si los necesitas)
        blueAccent: "#1d4ed8", // Azul (ejemplo para un botón o acción)
        orangeAccent: "#f97316", // Naranja (acción secundaria o advertencias)
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
