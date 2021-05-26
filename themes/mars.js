const colors = require('../src/colors')

const mars = {
  ...colors,
  primary: {
    dark: '#111E49',
    DEFAULT: '#22305E',
    light: '#2C428A',
  },
  light: {
    dark: '#5775D8',
    DEFAULT: '#95AEFF',
    light: '#EBF3FF',
    lightest: '#F4F8FF',
  },
}

module.exports = {
  colors: {
    ...mars,
    muted: colors.grey,
    background: mars.light.light,
    table: {
      head: mars.light.lightest,
      hover: mars.light.light,
    },
  },
  fontSize: {
    sm: ['0.86rem', '1.5'],
    base: ['1rem', '1.5'],
    lg: ['1.14rem', '1.5'],
    xl: ['1.4rem', '1.5'],
    '2xl': ['1.71rem', '1.5'],
  },
  fontWeight: {
    thin: 300,
    normal: 400,
    medium: 500,
    bold: 600,
  },
  lineHeight: {
    '1': '1.25rem',
    '2': '1.5rem',
    '3': '1.75rem',
    '4': '2rem',
    '5': '2.25rem',
    '6': '2.5rem',
    '7': '2.75rem',
    '8': '3rem',
  },
  extend: {
    gridTemplateColumns: {
      'layout': '220px 1fr',
    },
    gridTemplateRows: {
      'sidebar': '4.5rem 1fr',
      'main-content': '4.5rem 1fr',
    },
    spacing: {
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    width: {
      18: '4.5rem',
    },
    height: {
      18: '4.5rem',
    },
    boxShadow: {
      DEFAULT: '0px 2px 20px 0px #0000000D'
    },
  }
}
