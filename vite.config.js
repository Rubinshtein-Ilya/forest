import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import viteImagemin from 'vite-plugin-imagemin'
import dotenv from 'dotenv'

// Загрузка переменных среды из файла .env
dotenv.config()

export default defineConfig({
	css: {
		postcss: {
			plugins: [autoprefixer],
		},
	},
	plugins: [
		react(),
		ViteImageOptimizer({
			jpeg: {
				quality: 85,
			},
			jpg: {
				quality: 85,
			},
			png: {
				quality: 85,
			},
		}),
		// viteImagemin({
		// 	gifsicle: {
		// 		optimizationLevel: 7,
		// 		interlaced: false,
		// 	},
		// 	optipng: {
		// 		optimizationLevel: 7,
		// 	},
		// 	mozjpeg: {
		// 		quality: 20,
		// 	},
		// 	pngquant: {
		// 		quality: [0.8, 0.9],
		// 		speed: 4,
		// 	},
		// 	svgo: {
		// 		plugins: [
		// 			{
		// 				name: 'removeViewBox',
		// 			},
		// 			{
		// 				name: 'removeEmptyAttrs',
		// 				active: false,
		// 			},
		// 		],
		// 	},
		// }),
	],
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		rollupOptions: {
			input: {
				index: 'index.html',
			},
		},
	},
})
