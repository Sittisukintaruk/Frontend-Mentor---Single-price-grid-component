/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'primary-Cyan': 'hsl(179, 62%, 43%)',
      'prinary-Bright-Yellow': 'hsl(71, 73%, 54%)',
      'prinary-Bright-blue': '#4ABEBD',
      'neutral-Light-gray': ' hsl(204, 43%, 93%)',
      'neutral-Grayish-Blue': '#ecebff',
      'gray':'#A2A9B1',
      'secondary-cyan' :'#83EBEC',
      'bg-main' : "#F0F0F0"
    },
    fontFamily: {
      'sans': ['Karla', 'sans-serif'],
    }
    
  },
  plugins: [],
}


/** npx tailwindcss -i ./input.css -o ./style.css --watch */

