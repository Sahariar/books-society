/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#0284c7",
        
"secondary": "#f39100",
        
"accent": "#954a97",
        
"neutral": "#1f2937",
        
"base-100": "#f5f5f4",
        
"info": "#1D49E7",
        
"success": "#28B8A5",
        
"warning": "#ffcc00",
        
"error": "#F55C85",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}