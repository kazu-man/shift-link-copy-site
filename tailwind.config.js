/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveTopText: {
          "0%": {
            transform: "translateY(100%)",
          },
          "10%": {
            transform: "translateY(0px)",
          },
          "90%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        rotateAppear: {
          "0%": {
            opacity: 0,
          },
          "20%": {
            transform: "rotateX(90deg) rotateY(10deg)",
          },
          "80%": {
            transform: "rotateX(0) rotateY(0) ",
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        moveTopText: "moveTopText 5s ease-in-out forwards",
        rotateAppear: "rotateAppear 1.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
