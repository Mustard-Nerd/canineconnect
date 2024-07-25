import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#121212',
        secondary: '#0087FF',
        primaryD:"#242EB2",
        neutral:'#F7F8FC',
        accent:'#E1E0E6',
        textcolor:'#060419',
        textdarkgrey:'#1F323F',
        dropshadow:'#6E61CA20',
        
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      screens: {
        'base': '200px',
        'xs': '400px',
        'sm': '640px',
        'md': '760px',
        'lg': '1025px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      data: {
        checked: 'ui~="checked"',
      },
    },
  },
  plugins: [],
};
export default config;
