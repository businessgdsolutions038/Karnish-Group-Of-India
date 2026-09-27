/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#effdf5',
          100: '#d8fbe7',
          200: '#b3f5d0',
          300: '#78eaae',
          400: '#3dd684',
          500: '#16bd63',
          600: '#089a4f',
          700: '#077c42',
          800: '#0a6237',
          900: '#095030',
        },
        ocean: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bcdfff',
          300: '#8ecbff',
          400: '#58abfc',
          500: '#3389f7',
          600: '#1d6ae9',
          700: '#1854d4',
          800: '#1a47ae',
          900: '#1b3e89',
          950: '#152754',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)',
        'card-hover': '0 12px 32px rgba(15,23,42,0.10), 0 4px 12px rgba(15,23,42,0.06)',
        glow: '0 0 40px rgba(22,189,99,0.15)',
      },
    },
  },
  plugins: [],
};
