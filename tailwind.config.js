
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a2d2a',
          900: '#0d423d',
          800: '#124e47',
          700: '#1a5d51',
          600: '#1f6d5d',
        },
        brand: {
          50: '#eefaf3',
          100: '#d9f0e3',
          200: '#bfe3cf',
          300: '#94d0ad',
          400: '#67b78c',
          500: '#1a8a62',
          600: '#136d54',
          700: '#0e5647',
          800: '#0b433c',
          900: '#092f2d',
        },
        green: {
          50: '#f3fbe9',
          100: '#e5f4cf',
          200: '#cfe99a',
          300: '#b6d567',
          400: '#8dc645',
          500: '#7bbf59',
          600: '#5ca84d',
          700: '#4e8f40',
          800: '#3b6e34',
          900: '#254a28',
        },
      },
      fontFamily: { sans: ['Inter', 'sans-serif'], display: ['Fraunces', 'Syne', 'serif'] }
    }
  },
  plugins: []
}
