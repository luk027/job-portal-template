/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1728px",
      // => @media (min-width: 1536px) { ... }
    },
    // colors: {
    //   primary: "#4338ca",
    //   // secondary: "#00129A", 
    //   'nav_color': '#202430',
    //   'footer_color': '#202430',
    //   // 'footer_color': '#333333',

    // },
    extend: {},
  },
  plugins: [],
}