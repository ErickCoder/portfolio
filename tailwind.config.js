/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sen: ["Sen", "sans-serif"],

      screens: {
        xxs: "320px",
      },
    },
    extend: {},
  },
  plugins: [],
};
