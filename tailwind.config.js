const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        gray: colors.trueGray,
        yellow: colors.yellow,
        orange: colors.orange,
        coolGray: colors.coolGray,
        warmGray: colors.warmGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
