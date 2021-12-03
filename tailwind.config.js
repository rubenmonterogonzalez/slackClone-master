module.exports = {
    mode: "jit",
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: "class", // false or 'media' or 'class'
    theme: {
        screens: {
            mb: "480px",
            // => @media (min-width: 480px) { ... }
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            spacing: {
                112: "28rem",
                128: "32rem",
                144: "36rem",
                192: "48rem",
                "1/3.3": "30%",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};