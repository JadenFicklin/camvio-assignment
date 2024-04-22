/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '290px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      xxl: '1400px',
    },
    fontFamily: {
      quicksand: ['Quicksand', ...fontFamily.sans],
    },
    extend: {
      colors: {
        theme: {
          50: 'hsl(var(--theme-50) / <alpha-value>)',
          100: 'hsl(var(--theme-100) / <alpha-value>)',
          200: 'hsl(var(--theme-200) / <alpha-value>)',
          300: 'hsl(var(--theme-300) / <alpha-value>)',
          400: 'hsl(var(--theme-400) / <alpha-value>)',
          500: 'hsl(var(--theme-500) / <alpha-value>)',
          600: 'hsl(var(--theme-600) / <alpha-value>)',
          700: 'hsl(var(--theme-700) / <alpha-value>)',
          800: 'hsl(var(--theme-800) / <alpha-value>)',
          900: 'hsl(var(--theme-900) / <alpha-value>)',
          950: 'hsl(var(--theme-950) / <alpha-value>)',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, position: 'relative', top: '-24px' },
          '100%': { opacity: 1, position: 'relative', top: '0px' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
