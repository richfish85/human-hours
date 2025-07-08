// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#FF6F3C',
          DEFAULT: '#FF5E5B',
          dark: '#C73E3A',
        },
        background: {
          light: '#FCFAF9',
          dark: '#111111',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
