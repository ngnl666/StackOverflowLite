import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig((mode: ConfigEnv): UserConfig => {
	const env = loadEnv(mode.mode, process.cwd());

	return {
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			},
		},
		css: {
			preprocessorOptions: {},
		},
		server: {
			host: '0.0.0.0',
			port: Number(env.VITE_PORT),
			open: true,
			cors: true,
		},
		plugins: [react(), eslintPlugin()],
		esbuild: {
			pure: env.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
		},
		build: {
			outDir: 'dist',
			rollupOptions: {
				output: {
					/* Static resource classification and packaging */
					assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
				},
			},
		},
	};
});
