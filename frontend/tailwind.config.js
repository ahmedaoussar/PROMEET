const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "bleuFonce": "#002C77",
                "nuanceBlanc": "#F8F7FF"
            }
        },
    },
    plugins: [],
});
