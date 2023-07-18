/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blueColor: "#1C77AA",
      redColor: "#DD4A68",
      greyColor: "#999999",
      beigeColor: "#F7F6F3",
      wineColor: "#990055",
      greenColor: "#669900",
      blackColor: "#000000",
      opacityColor: "rgba(0, 0, 0, 0.5)",
    },
    extend: {
      fontSize: {
        base: "16px",
        mid: "24px",
        head: "36px",
      },
      padding: {
        base: "2.5rem",
        span: "1rem",
      },
      margin: {
        base: "2.5rem",
        span: "1rem",
      },
    },
  },
  plugins: [],
};
