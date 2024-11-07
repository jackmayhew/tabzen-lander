module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    screens: {
      xs: "540px",
      ...require("tailwindcss/defaultTheme").screens,
    },
    extend: {
      colors: {
        "blue-500": `#2e74d3`,
      },
      fontFamily: {
        display: ['InterVariable', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
