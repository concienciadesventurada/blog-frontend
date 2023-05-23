/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    listStyleType: {
      square: 'square',
      roman: 'upper-roman',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'gris': '#1E2022',
        'celestucho': '#d6e0f0',
        'celestucho2': '#c9d6df',
        'grisstacy': '#8d93ab',
        'blancucho': '#F1F3F8',
        'cv': '#f0f5f9',
        'dorado': '#FFE194',
        'verde': '#C9F4AA',
        'rojo': '#F48484',
        'azulito': '#AEE2FF'
      }
    }
  },
  plugins: [],
}

