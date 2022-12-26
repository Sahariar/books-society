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
        
"primary": "#3369e7",
        
"secondary": "#facc15",
        
"accent": "#954a97",
        
"neutral": "#050f2c",
        
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