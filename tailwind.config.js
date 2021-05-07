module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container:{
      padding :'2rem',
      centre :true
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
