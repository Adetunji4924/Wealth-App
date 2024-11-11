/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Rubik': ['Rubik']
      },

      colors: {
        primary: ['#71A0FE'],
        tertiary: ['#DAE0F2'],
        secondary: ['#4458FE'],
        text1: ['#6A74A5'],
        text2: ['3A3F63']
      },

      backgroundImage: {
        Banner: "url('./src/assets/Banner.png')",
      },
    },
  },
  plugins: [],
}
