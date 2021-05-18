// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('cssnano')({
      preset: 'default',
    }),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
