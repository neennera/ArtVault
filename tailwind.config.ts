import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gamja: ["Gamja Flower", "sans-serif"],
      },
      colors: {
        primary: "#472950", // Ameri
        lilac: "#C0A4C4",
        cinnamon: "#D46A79",
        apricot: "#F6CBB6",
        persian: "#78201B",
      },
    },
  },
  plugins: [],
};

export default config;
