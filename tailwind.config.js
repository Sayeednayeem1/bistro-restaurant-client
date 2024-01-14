/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      foodText: ["Shantell Sans, cursive"],
    }
  },
  plugins: [require("daisyui")],
}

