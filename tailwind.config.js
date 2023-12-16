/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': 'hsl(35, 77%, 62%)',
        'red': 'hsl(5, 85%, 63%)',
        'white': 'hsl(36, 100%, 99%)',
        'gray-blue': 'hsl(233, 8%, 79%)',
        'dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'very-dark-blue': ' hsl(240, 100%, 5%)'
      },
      fontWeight: {
        normal: '400',
        bold: '700',
        extrabold: '800',
      }
    },
  },
  plugins: [],
}