/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0056B3',
          light: '#5C9BFF',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#1A1A1A',
          muted: '#F3F5F7',
          'dark-muted': '#2A2A2A',
        },
        border: {
          DEFAULT: '#D9DDE3',
          dark: '#333333',
        },
        text: {
          muted: '#5E6A7A',
          'dark-muted': '#A6ADBA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        breathe: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '.6' },
        },
      },
      animation: {
        breathe: 'breathe 3s ease-in-out infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
