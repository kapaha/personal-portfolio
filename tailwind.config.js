module.exports = {
    content: ["index.html", "./src/**/*.{js,html}"],
    theme: {
        extend: {
            height: {
                "dynamic-screen": ["100vh", "100dvh"],
            },
        },
    },
    plugins: [],
};
