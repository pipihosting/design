const defaultTheme = require("./themes/mars.js")

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.scss', './docs/**/*.md'],
  },
  darkMode: false, // or 'media' or 'class'
  important: true,
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
