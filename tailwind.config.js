const defaultTheme = require("./themes/mars.js")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...defaultTheme,
  },
  variants: {
    extend: {
      display: ['group-hover', 'group-focus'],
      backgroundColor: ['disabled'],
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
