/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#E23636",
        mainGray: "#202020",
        lightGray: "#828282",
        mainYellow: "#F78F3F",
        mainBlue: "#518CCA",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
