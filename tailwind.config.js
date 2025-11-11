/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-15px) translateX(10px)' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(0.7)' },
          '50%': { transform: 'scaleY(1.4)' },
        },
        aurora: {
          '0%': { transform: 'translateY(-10%) scale(1)' },
          '50%': { transform: 'translateY(10%) scale(1.05)' },
          '100%': { transform: 'translateY(-5%) scale(1.02)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite',
        float: 'float 8s ease-in-out infinite',
        wave: 'wave 1s ease-in-out infinite',
        aurora: 'aurora 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
