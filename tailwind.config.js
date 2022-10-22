const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        rose: colors.rose,
        'secondary': '#F6FAFB'
      }
    }
  },
  variants: {
    extend: {
      display: ['group-hover']
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.xl') }
      })
    }),
    require('@tailwindcss/line-clamp')
  ],
}
