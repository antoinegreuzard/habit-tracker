// vitest.config.ts
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
			$routes: path.resolve('./src/routes')
		}
	},
	test: {
		include: ['./tests/*.spec.[tj]s'],
		globals: true,
		environment: 'jsdom'
	}
});
