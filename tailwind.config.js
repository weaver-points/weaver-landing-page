/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: '#16A349',
                'primary-dark': '#128C3B',
                'primary-light': '#19c655',
                dark: {
                    900: '#0D0D0D',
                    800: '#161616',
                    700: '#232222',
                    600: '#333333',
                    500: '#444444',
                },
            },
            animation: {
                'gradient-x': 'gradient-x 10s ease infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-10px)',
                    },
                },
            },
        },
    },
    plugins: [],
};
