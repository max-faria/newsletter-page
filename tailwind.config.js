/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        branco: {
          gelo: "background: #F7F5FB;",
          total: "#FFFFFF",
        },
        azul: {
          button: "#1A54FF",
          claro: "#C5DFFF",
          escuro: "#061E3C",
          hover: "#1057B0",
        },
        cinza: {
          claro: "#908F8F",
          claro2: "#B3B3B3",
        },
        verde: {
          success: "#65c368",
          hover: "#5f985e",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    backgroundImage: {
      blur: "url(./src/assets/fundo-figure.png)",
    },
    plugins: [],
  },
};
