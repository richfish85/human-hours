// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF6F3C',
        'brand-coral': '#FF5E5B',
        'background-light': '#FCFAF9',
        'background-dark': '#111111',
        charcoal: '#333333',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        breathe: 'breathe 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
