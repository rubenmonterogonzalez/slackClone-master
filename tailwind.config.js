module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        97: '28rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
