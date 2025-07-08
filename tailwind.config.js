/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        /* Brand */
        brand: { DEFAULT: '#007BFF', light: '#60A5FA' },

        /* Accents */
        'accent-green': '#10B981',
        'accent-yellow': '#FCD34D',

        /* Surfaces */
        surface: '#F8F8F8',
        'surface-dark': '#1A1A1A',
        'surface-muted': '#ECECEC',
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
