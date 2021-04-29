const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        default: "rgba(245, 222, 213, 1)",
        hero: "#C4C4C4",
      },
    },
  },
}