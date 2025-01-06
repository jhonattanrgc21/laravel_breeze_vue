import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                'poppins-black': ['Poppins-Black', 'sans-serif'],
                'poppins-extrabold': ['Poppins-ExtraBold', 'sans-serif'],
                'poppins-italic': ['Poppins-Italic', 'sans-serif'],
                'poppins-mediumitalic': ['Poppins-MediumItalic', 'sans-serif'],
                'poppins-thin': ['Poppins-Thin', 'sans-serif'],
                'poppins-blackitalic': ['Poppins-BlackItalic', 'sans-serif'],
                'poppins-extrabolditalic': ['Poppins-ExtraBoldItalic', 'sans-serif'],
                'poppins-light': ['Poppins-Light', 'sans-serif'],
                'poppins-regular': ['Poppins-Regular', 'sans-serif'],
                'poppins-thinitalic': ['Poppins-ThinItalic', 'sans-serif'],
                'poppins-bold': ['Poppins-Bold', 'sans-serif'],
                'poppins-extralight': ['Poppins-ExtraLight', 'sans-serif'],
                'poppins-lightitalic': ['Poppins-LightItalic', 'sans-serif'],
                'poppins-semibold': ['Poppins-SemiBold', 'sans-serif'],
                'poppins-bolditalic': ['Poppins-BoldItalic', 'sans-serif'],
                'poppins-extralightitalic': ['Poppins-ExtraLightItalic', 'sans-serif'],
                'poppins-medium': ['Poppins-Medium', 'sans-serif'],
                'poppins-semibolditalic': ['Poppins-SemiBoldItalic', 'sans-serif'],
            },
            screens: {
                'sm': '412px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1440px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1920px',
                // => @media (min-width: 1536px) { ... }
            }
        },
    },
    plugins: [
        // require('@tailwindcss/forms')
    ],
}
