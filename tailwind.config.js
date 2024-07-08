module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        screens: {
            xs: "480px",
            // 'sm': '640px',
            // 'md': '768px',
            // 'lg': '1024px',
            // 'xl': '1280px',
            // '2xl': '1536px',
            sm: "548px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            animation: {
                // "gradient-x": "gradient-x 3s ease infinite",
            },
            keyframes: {
                "gradient-x": {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
            inset: {
                17: "68px",
                26: "104px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
