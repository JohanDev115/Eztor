/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': 'Poppins, sans-serif'
    },
    colors: {
      'white': '#fff',
      'primary': '#BE0000'
    }
  },
  plugins: [],
}

