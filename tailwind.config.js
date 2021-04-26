const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        default: "#FBEFEB",
        hero: "#C4C4C4",
      },
    },
  },
}