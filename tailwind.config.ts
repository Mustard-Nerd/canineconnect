import type { Config } from "tailwindcss";

const config: Config = {
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
        primary: "#121212",
        secondary: "#0086FF",
        primaryD: "#DBEEFE",
        neutral: "#F7F8FC",
        accent: "#E1E0E6",
        textcolor: "#060419",
        textdarkgrey: "#1F323F",
        dropshadow: "#6E61CA20",
        darkbg:"#003666",
        border: "#497BFF",
        blue:"#DBEEFE",
        yellow:"#FBBA32"
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        benz: ["Benz Grotesk", "sans-serif"],
      },
      screens: {
        base: "200px",
        xs: "400px",
        sm: "640px",
        md: "760px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        custom: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)",
        customWhite: "0px 4px 4px 4px rgba(255, 255, 255, 1)",
      },
      data: {
        checked: 'ui~="checked"',
      },
    },
  },
  plugins: [],
};
export default config;
