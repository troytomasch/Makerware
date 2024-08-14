/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "makerwear-blue": "#477d77",
        "makerwear-bright": "#7ed9ce",
      },
    },
  },
  plugins: [],
};
