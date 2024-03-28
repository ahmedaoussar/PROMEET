const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors:{
                "blue": "#002C77" ,
                "nuaceblanc": "#F8F7FF"
            }
        },
    },
    plugins: [],
});