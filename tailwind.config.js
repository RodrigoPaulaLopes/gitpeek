/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontSize: {
        "80": "80px",
        "search": "62px",
        "avatar": "220px"
      },
      colors: {
        "button": "#0f60fe",
        "alert": "#D9D9D9",
        "error": "#FF0000",
        "title": "#005CFF"
      },
      
    },
  },
  plugins: [daisyui],
}

