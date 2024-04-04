/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        muted_gray : "#B7B098",
        white : "#FFFFFF",
        black : "#1E201F"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    //adjust font weights as needed
    fontWeight: {
      normal: 400, 
      bold: 700,    
    },
    fontSize: {
      small: "14px",
      medium: "24px",
      large: "40px",
    },
  },
  plugins: [],
};
