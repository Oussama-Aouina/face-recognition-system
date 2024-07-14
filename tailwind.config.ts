/** @type {import('tailwindcss').Config} */

import { transform } from 'next/dist/build/swc';

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            md: '1000px',
            sm: '640px',
            lg: '1200px',
        },
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
            keyframes: {
                slidein: {
                    from: {
                        opacity: '0',
                        transform: 'translateY(-10px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
            animation: {
                slidein: 'slidein 0.5s ease var(--slidein-delay,0) forwards',
            },
        },
    },
    plugins: [require('tailwindcss-animation-delay')],
};
