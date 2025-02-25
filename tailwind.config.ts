import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                salmon: '#f49696',
                skin: '#ef9c7d',
                blush: '#ed7474',
                dracula: '#5a4f65',
                lime: '#f3f8f6',
            },
            fontFamily: {
                inter: ['var(--font-inter)', 'sans-serif'],
                prompt: ['var(--font-prompt)', 'sans-serif'],
            },
            screens: {
                375: '375px',
                480: '480px',
                600: '600px',
                720: '720px',
                1024: '1024px',
                1280: '1280px',
                1440: '1440px',
            },
        },
    },
    plugins: [],
}
export default config
