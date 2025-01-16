/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

// (Optional) Import default theme when using a custom font (Step 7)
//import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       
    },
  },
  plugins: [],
}