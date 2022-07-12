/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        grey: '#393E43',
        'grey-light': '#525166',
        'grey-dark': '#202020',
        'white-dark': '#FAFAFA',
        'white-huge': '#F2F2F2',
        orange: '#FBBC30',
        'orange-red': '#EE8023',
        red: '#EA5E31',
        'gemstone-green': '#007A6B',
        pink: '#FBECCA'
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1920px'
        // => @media (min-width: 1920px) { ... }
      }
    }
  },
  plugins: []
}
