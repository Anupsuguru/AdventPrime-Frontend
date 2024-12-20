/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,jsx,js}"
  ],
  theme: {
    extend: {
      minHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '1/3': '33.3333%',
        '2/3': '66.6667%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '1/3': '33.3333%',
        '2/3': '66.6667%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      margin: {
        '1/100': '1%',
        '1/20': '5%',
        '1/6': '16.6667%',
        '1/5': '20%',
        '1/4': '25%',
        '1/3': '33.3333%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '2/3': '66.6667%',
        '3/4': '75%',
        '4/5': '80%',
        '5/6': '83.3333%',
      },
      colors: {
        'indigo-blue-card': '#000046',
        'sky-blue-card': '#1D8AA9'
      },
      keyframes: {
        click: {
          '0%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(0.95)'},
          '100%': {transform: 'scale(1)'},
        },
      },
      animation: {
        click: 'click 0.3s ease-in-out',
      },
    }
  },
  plugins: [],
}
