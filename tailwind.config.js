module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            50: 'rgba(189, 189, 189, 0.5)',
            100: '#121212',
            150: '#3C3C3C'
          }
        },
        spacing: {
          brand: '50px'
        },
        fontSize: {
          'brand-lg': '120px',
          'brand-xl': '180px',
          'brand-2xl': '250px'
        }
      },
    },
    plugins: [],
  }