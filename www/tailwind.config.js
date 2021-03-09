module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Cascadia Code", "sans-serif"],
    },
    extend: {
      colors: {
        "steel-gray": {
          default: "#1B1C27",
          "100": "#70749E",
          "200": "#595C82",
          "300": "#444764",
          "400": "#303146",
          "500": "#1B1C27",
          "600": "#060609",
          "700": "#000000",
          "800": "#000000",
          "900": "#000000",
        },
        anakiwa: {
          default: "#8ADEFF",
          "100": "#FFFFFF",
          "200": "#FFFFFF",
          "300": "#F0FBFF",
          "400": "#BDECFF",
          "500": "#8ADEFF",
          "600": "#57CFFF",
          "700": "#24C1FF",
          "800": "#00ACF0",
          "900": "#0087BD",
        },
        cranberry: {
          default: "#DE5971",
          "100": "#FFFFFF",
          "200": "#F7D9DE",
          "300": "#EFAEBA",
          "400": "#E78496",
          "500": "#DE5971",
          "600": "#D62E4D",
          "700": "#AF233C",
          "800": "#841A2E",
          "900": "#59121F",
        },
        "atomic-tangerine": {
          default: "#FF9E66",
          "100": "#FFFFFF",
          "200": "#FFFFFF",
          "300": "#FFDFCC",
          "400": "#FFBE99",
          "500": "#FF9E66",
          "600": "#FF7E33",
          "700": "#FF5E00",
          "800": "#CC4B00",
          "900": "#993800",
        },
        "wild-willow": {
          default: "#9DCE69",
          "100": "#FFFFFF",
          "200": "#E8F4DC",
          "300": "#CFE7B6",
          "400": "#B6DB8F",
          "500": "#9DCE69",
          "600": "#84C242",
          "700": "#6A9E33",
          "800": "#507727",
          "900": "#36511A",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#8ADEFF",
            strong: {
              color: "#FF9E66",
            },
            a: {
              color: "#DE5971",
              "a:hover": {
                color: "#EFAEBA",
              },
            },
            h1: {
              color: "#9DCE69",
            },
            h2: {
              color: "#B6DB8F",
            },
            h3: {
              color: "#B6DB8F",
            },
            h4: {
              color: "#B6DB8F",
            },
            code: {
              background: "#E8F4DC",
              color: "#36511A",
              padding: ".25rem",
            },
            blockquote: {
              color: "#70749E",
              background: "#060609",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
