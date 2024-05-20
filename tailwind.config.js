/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'lightgray': '#fafafa',
      'gray': '#f1f1f1',
      'darkblue': '#02274f',
      'yellow': '#FDCF00',
      'red' : '#FF0000',
      'darkgray': '#f4f4f4',
      'lightblue': '#f1f5f9'
    },
    extend: {
      boxShadow: {
        'all': '0 10px 30px 10px rgba(0, 0, 0, 0.2)',
        'sm-2': '0 1px 3px 1px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}

