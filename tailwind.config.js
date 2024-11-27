/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    fontFamily: {
      primary: "Montserrat",
      secondary: "Orbitron",
    },
    extend: {
      colors: {
        primary: "#B809C3",
        secondary: "#ff014f",
        third: "#FEF6C7",
        fourth: "#011eff",
      },
    },
  },
  plugins: [],
}

