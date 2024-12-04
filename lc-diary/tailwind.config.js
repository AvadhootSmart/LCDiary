const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        animation: {
            aurora: "aurora 60s linear infinite",
        },
        keyframes: {
            aurora: {
                from: {
                    backgroundPosition: "50% 50%, 50% 50%",
                },
                to: {
                    backgroundPosition: "350% 50%, 350% 50%",
                },
            },
        },
        extend: {
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {},
            fontFamily: {
                Roboto: ["Roboto", "sans-serif"],
                Montserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
