/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    'opacity-40',
    'hidden',
    'lg:block',
    'lg:px-10',
    'swiper'
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
        'grey-2': '#D8D8D8',
        'white-dark': '#FAFAFA',
        'white-huge': '#F2F2F2',
        orange: '#FBBC30',
        'orange-red': '#EE8023',
        red: '#EA5E31',
        'gemstone-green': '#007A6B',
        'gemstone-light': '#A8D7E0',
        pink: '#FBECCA',
        'pink-2': '#F4BCAA',
        'blue-ocean': '#D9ECF0',
        silver: '#AFAFAF'
      },
      backgroundImage: {
        'banner-transparencia': "url('/images/banner-transparencia.svg')",
        'banner-trazabilidad': "url('/images/banner-trazabilidad.svg')",
        'banner-confiabilidad': "url('/images/banner-confiabilidad.svg')"
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
      },
      aspectRatio: {
        '3/2': '3 / 2'
      }
    }
  },
  plugins: []
}
