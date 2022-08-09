/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx" ],
  theme: {
    extend: {
      colors: {
        'yellow-ml' : '#FFE600',
        'black-ml' : '#333333',
        'grey-one-ml' : '#666666',
        'grey-two-ml' : '#999999',
        'grey-three-ml' : '#EEEEEE',
        'yellow-ml' : '#FFE600',
        'blue-ml' : '#3483FA',
      }
    },
    fontSize: {
      'xs-ml': '14px',
      'sm-ml': '16px',
      'md-ml': '18px',
      'lg-ml': '24px',
      'xl-ml': '46px',
    }
  },
  plugins: [],
}
