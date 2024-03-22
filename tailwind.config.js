
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "background-shine": "background-shine 2s linear infinite"

      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        }
      },
      fontFamily: {
        "apple": ["-apple-system", "BlinkMacSystemFont", 
          "Segoe UI", "Roboto", "Oxygen", 
          "Ubuntu", "Cantarell", "Fira Sans", 
          "Droid Sans", "Helvetica Neue", "sans-serif"],
          "Inter" :["Inter"],
      
        
      },
    },
  },
  plugins: [],
};

