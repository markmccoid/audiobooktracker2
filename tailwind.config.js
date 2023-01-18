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
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
