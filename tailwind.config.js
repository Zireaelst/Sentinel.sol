/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'shine': 'shine 0.6s ease-in-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle at 1px 1px, #292929 1px, transparent 0)',
      },
      backgroundSize: {
        'dot': '25px 25px',
      }
    },
  },
  plugins: [],
}
