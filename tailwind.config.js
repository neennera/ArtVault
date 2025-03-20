module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
      extend: {
        fontFamily: {
          gamja: ['"Gamja Flower"', 'cursive'], // Add the font here
        },
      },
    },
    plugins: [],
  };