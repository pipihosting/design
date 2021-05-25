const colors = {
  white: { DEFAULT: 'white' },
  black: { DEFAULT: '#313131', dark: '#111111', light: '#616161' },
  grey: { DEFAULT: '#CCCCCC', dark: '#919191', light: '#DFDFDF', lightest: '#F6F6F6' },
  blue: { DEFAULT: '#22305E', dark: '#111E49', light: '#2E448E' },
  lightblue: { DEFAULT: '#EBF3FF', dark: "#F4F8FF" },
  yellow: { light: '#FFBC1F', DEFAULT: '#F6A609', dark: '#E89806' },
  green: { light: '#1AB759', DEFAULT: '#2AC769', dark: '#40DD7F' },
  red: { light: '#FF6262', DEFAULT: '#FB4E4E', dark: '#E93C3C' },
}

module.exports = {
  colors: {
    primary: colors.blue,
    danger: colors.red,
    info: colors.blue,
    success: colors.green,
    warning: colors.yellow,
    secondary: colors.grey,
    background: colors.lightblue,
    grey: colors.grey,
    white: colors.white,
    black: colors.black,
    blue: colors.blue,
    yellow: colors.yellow,
    green: colors.green,
    red: colors.red,
    table: {
      head: colors.lightblue.dark,
      hover: colors.lightblue.DEFAULT,
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
