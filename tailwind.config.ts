/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#161512",
        "btn-blue": "#004761",
        smoke: "#D9CBC7",
        overlay: "#0D313F",
        red: "#FF3C00",
        green: "#1E6B5A",
        "dark-blue": "#003345",
        "light-blue": "#1D88E8",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
