/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          900: '#0f172a', // Slate 900
          800: '#1e293b', // Slate 800
          500: '#3b82f6', // Blue 500
          accent: '#f59e0b', // Amber 500
        }
      }
    },
  },
  plugins: [],
}

