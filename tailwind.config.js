/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      "first-color": "var(--first-color)",
      "first-color-second": "var(--first-color-second)",
      "first-color-alt": "var(--first-color-alt)",
      "first-color-lighter": "var(--first-color-lighter)",
      "title-color": "var(--title-color)",
      "text-color": "var(--text-color)",
      "text-color-light": "var(--text-color-light)",
      "input-color": "var(--input-color)",
      "body-color": "var(--body-color)",
      "container-color": "var(--container-color)",
      "scroll-bar-color": "var(--scroll-bar-color)",
      "scroll-thumb-color": "var(--scroll-thumb-color)",
    },
    extend: {},
  },
  plugins: [],
};
