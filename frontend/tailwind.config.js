/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      borderRadius: {
        xl:  '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,.07), 0 4px 12px rgba(0,0,0,.04)',
        md:   '0 4px 16px rgba(0,0,0,.09)',
        lg:   '0 8px 32px rgba(0,0,0,.12)',
      },
    },
  },
  plugins: [],
}
