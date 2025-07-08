/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        /* Brand */
        brand: { DEFAULT: '#0056B3', light: '#5C9BFF' },

        /* Surfaces */
        surface: '#FFFFFF',
        'surface-dark': '#1A1A1A',
        'surface-muted': '#F3F5F7',
        'surface-dark-muted': '#2A2A2A',

        /* Borders / text helpers */
        border: '#D9DDE3',
        'border-dark': '#333333',
        'text-muted': '#5E6A7A',
        'text-dark-muted': '#A6ADBA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
