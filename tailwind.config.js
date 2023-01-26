/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cerulean-blue": {
          50: "#f2f6fd",
          100: "#e5ebf9",
          200: "#c5d5f2",
          300: "#92b2e7",
          400: "#588ad8",
          500: "#3066bb",
          600: "#2353a6",
          700: "#1d4187",
          800: "#1c3a70",
          900: "#1c325e",
        },
        audible: {
          50: "#fffcea",
          100: "#fff4c5",
          200: "#ffe885",
          300: "#ffd646",
          400: "#ffc21b",
          500: "#ff9f00",
          600: "#e27700",
          700: "#bb5102",
          800: "#983e08",
          900: "#7c330b",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
