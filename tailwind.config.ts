import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          DEFAULT: "#1a6b3c",
          escuro: "#0d4424",
          claro: "#2d9e5f",
          palido: "#e8f5ee",
        },
        terra: "#8B5E3C",
        areia: {
          DEFAULT: "#f5f0e8",
          escura: "#e8e0d0",
        },
        preto: "#0f1a0e",
        texto: "#1a2b18",
        cinza: "#6b7c6a",
        branco: "#fafaf8",
        alerta: {
          amarelo: "#e65100",
          vermelho: "#c62828",
          vermelhoBg: "#ffebee",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
      letterSpacing: {
        mono: "0.16em",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(26,107,60,0.12)",
        elev: "0 12px 40px rgba(26,107,60,0.1)",
        cta: "0 4px 20px rgba(26,107,60,0.25)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.18)" },
        },
        rotate: {
          to: { "--angle": "360deg" } as any,
        },
      },
      animation: {
        pulseDot: "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
