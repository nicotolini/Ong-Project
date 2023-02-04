/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    textShadow: {
      custom: "0 2px 4px rgba(0, 0, 0, 0.5)",
    },
    extend: {
      colors: {
        black: "#000000",
        white: { 100: "#FFFFFF", 200: "#E6E6FA" },
        violet: {
          50: "rgba(42, 42, 209, 0.2)",
          100: "#E6E6FA",
          200: "#4D4DDB",
          300: "#2A5CD1",
          500: "#2A2AD1",
          600: "#191975",
          gradient: "linear-gradient(255.2deg, #2A2AD1 -5.67%, #4D4DDB 108.81%)",
          "gradient-light": "linear-gradient(265.89deg, #4D4DDB -9.01%, #4D4DDB 116.41%)",
          "gradient-strong": "linear-gradient(110.71deg, rgba(23, 23, 92, 0.7) -28.45%, rgba(0, 0, 0, 0.49) 123.93%)",
          "gradient-navbar": "linear-gradient(255.2deg, #2A2AD1 -5.67%, #4D4DDB 108.81%)",
        },
        red: "#ED4C5C",
      },
    },
  },
  plugins: [],
};
