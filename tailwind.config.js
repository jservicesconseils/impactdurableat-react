
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071b2f',
          900: '#0a1f38',
          800: '#102a42',
          700: '#173a5a',
          600: '#214d72',
        },
        brand: {
          50: '#fff4ee',
          100: '#ffe4d7',
          200: '#ffc8ae',
          300: '#f8a57a',
          400: '#f38b5a',
          500: '#f26d3d',
          600: '#dd5d31',
          700: '#b74828',
          800: '#8c3821',
          900: '#4a1f16',
        },
        green: {
          50: '#edfdf3',
          100: '#d7f8e6',
          200: '#b8efcc',
          300: '#86dfaa',
          400: '#4dd07c',
          500: '#1db863',
          600: '#169d57',
          700: '#117a46',
          800: '#0d5d39',
          900: '#093d28',
        },
      },
      fontFamily: { sans: ['Inter', 'sans-serif'], display: ['Fraunces', 'Syne', 'serif'] }
    }
  },
  plugins: []
}
