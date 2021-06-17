const colors = require('../src/colors')

const venus = {
  ...colors,
  primary: {
    dark: '#1E7B28',
    DEFAULT: '#14AD24',
    light: '#35C944',
  },
  light: {
    dark: '#4BE45B',
    DEFAULT: '#B2FBB9',
    light: '#F1FFF3',
    lightest: '#FAFFFA',
  },
  secondary: {
    darkest: "#1B1E28",
    dark: "#282C38",
    DEFAULT: "#7B7E8B",
    light: "#B2BEE4",
    lightest: "#DADFEE",
  },
}

module.exports = {
  colors: {
    ...venus,
    muted: colors.grey,
    background: venus.light.light,
    table: {
      head: venus.light.lightest,
      hover: venus.light.light,
    },
    sidebar: {
      bg: venus.secondary.darkest,
      text: venus.secondary,
      "hover-bg": venus.secondary.light,
      "hover-text": venus.white,
      "hover-collapsible-bg": venus.secondary.light,
      "hover-collapsible-text": venus.secondary.lightest,
      "hover-collapsed-bg": venus.secondary.dark,
    }
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
