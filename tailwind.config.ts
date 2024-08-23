/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      large: { max: "1600px" },
      middle: { max: "1040px" },
      small: { max: "768px" },
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        ...defaultTheme.colors
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        mulish: ["var(--font-mulish)"],
        ...defaultTheme.fontFamily
      },
    },
  },
  plugins: [],
};
