/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      montez: ["Montez", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
      dm: ["DM Sans", "sans-serif"],
      reckless: ["Reckless", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-13deg)" },
          "50%": { transform: "rotate(13deg)" },
        },
        "wiggle-slow": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        "bounce-slow": "bounce 6s linear infinite",
        "wiggle-slow": "wiggle-slow 2s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      colors: {
        primary: " #98FF98",
      },
      backgroundImage: {
        shape1: " url('/shape1.svg')",
        shape2: " url('/shape2.svg')",
        shape3: " url('/shape3.svg')",
      },
    },
  },
  plugins: [],
};
