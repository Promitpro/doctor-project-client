/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorTheme: {

          primary: "#659DBD",

          secondary: "#DAAD86",

          accent: "#3A4256",

          neutral: "#110E0E",

          "base-100": "#171212",
          // "base-100": "#ffffff",

          
        },
        
        
      },
      
      
    ],

    
  },
  theme: {
    extend: {
      
    },
  },
  
  
  plugins: [require("daisyui")]
}
