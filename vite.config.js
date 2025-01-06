import path from 'path';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/sass/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@fonts': path.resolve(__dirname, 'resources/assets/fonts'),
            '@icons': path.resolve(__dirname, 'resources/assets/svg'),
        },
    },
});
