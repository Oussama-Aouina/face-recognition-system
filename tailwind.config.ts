/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#072B5B',
                activeElement: '#2EB1EE',
                activeButton: '#F57025',
                bgDropzone: '#3C5372',
                borderDropzone: '#646464',
                secondaryText: '#E7DCDC',
                resultText: '#C4C4C4',
                statColor: '#7D6AEE',
            },
            backgroundImage: {},
        },
    },
    plugins: [],
};
