/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundBlack: "#121212",
        darkGray: "#1D1D1D",
        teal: "#2DD4BF",
        textTeal: "#5EEAD4",
        lightGray: "#c7c5c5",
      },
      height: {
        home: "90vh",
      },
    },
    screens: {
      sm: "0px",
      md: "768px",
      mg: "900px",
      lg: "1200px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
