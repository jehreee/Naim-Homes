/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "homeImage": "url(/bgImage.jpg)"
      },
      gridTemplateColumns: {
        'auto-fill-grid-col': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      zIndex: {
        '100': '100',
      }
    },
    fontFamily:{
      navSign: ["Oswald"]
    },
  },
  plugins: [],
}

