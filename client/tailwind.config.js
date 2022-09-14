/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { opacity: '0' },
          '50%': { opacity: '60' },
          // '100%': { opacity: '10' },
        }
      },
      animation: {
        'test': 'wave 2s linear',
      },
    },
  },
  plugins: [],
}
