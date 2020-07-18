module.exports = {
  plugins: [],
  purge: ['./**/*.tsx', './assets/global.scss'],
  theme: {
    extend: {
      colors: {
        highlight: 'rgba(255, 255, 255, 0.25)',
        primary: '#e80c30',
        secondary: '#fd902b'
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji'
        ]
      },
      maxHeight: {
        autocomplete: '20rem'
      },
      minWidth: {
        input: '20rem'
      },
      width: {
        movies: '36rem'
      }
    }
  },
  variants: {}
}
