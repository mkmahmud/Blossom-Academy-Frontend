/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      primary: "#f55951",
      primaryHover: "#edd2cb",
      secondary: "#361d32",
      secondaryHover: "#543c52",
      gray: "#f1e8e6",
      black: "#000000",
      white: "#FFFFFF",
    },
    fontSize: {
      xs: "0.75rem", // 12 pixels - Extra small font size
      sm: "0.875rem", // 14 pixels - Small font size
      base: "1rem", // 16 pixels - Default font size
      lg: "1.125rem", // 18 pixels - Large font size
      xl: "1.25rem", // 20 pixels - Extra large font size
      large: "1.5rem", // 24 pixels - 2x large font size
      extraLarge: "2rem", //
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
};
