import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            utils: path.resolve(__dirname, './src/utils'),
            components: path.resolve(__dirname, './src/components'),
            hooks: path.resolve(__dirname, './src/hooks'),
            plugins: path.resolve(__dirname, './src/plugins'),
        },
    },
});
