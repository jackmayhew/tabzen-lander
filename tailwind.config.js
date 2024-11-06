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
      colors: {},
    },
  },
  plugins: [],
};
