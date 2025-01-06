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
            pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            spin: "spin 1s linear infinite",
        },
        keyframes: {
            aurora: {
                from: {
                    backgroundPosition: "50% 50%, 50% 50%",
                },
                to: {
                    backgroundPosition: "350% 50%, 350% 50%",
                },
            }, pulse: {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0.5 },
            },
            spin: {
                from: {
                    transform: "rotate(0deg)",
                },
                to: {
                    transform: "rotate(360deg)",
                },
            }
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
