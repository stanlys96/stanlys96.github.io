/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        gray: "#F7F7F7",
        darkGray: "#E4E4E7",
        lightGray: "#F9FAFB",
        green: "#BBF7D0",
        yellow: "#FFEF8A",
        secondaryGray: "#A2A2A2",
        blue: "#BFDBFE",
        darkBlue: "#1F2937",
      },
      colors: {
        green: "#17803D",
        yellow: "#A16207",
        gray: "#44444B",
        blue: "#1A4ED8",
        darkBlue: "#1F2937",
      },
      borderColor: {
        gray: "#F7F7F7",
        darkGray: "#E4E4E7",
        lightGray: "#F9FAFB",
        green: "#BBF7D0",
        yellow: "#FFEF8A",
        darkBlue: "#1F2937",
      },
    },
  },
  plugins: [],
};
