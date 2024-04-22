/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        orange: "0 1px 3px 0 #FF8000, 0 1px 2px 0 #FF8000",
      },
    },
  },
  plugins: [],
};
