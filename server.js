import fs from 'node:fs/promises'
import express from 'express'
import { createServer } from 'vite'
import compression from 'compression'
import sirv from 'sirv'

const isProduction = process.env.NODE_ENV === 'production'

const port = process.env.PORT || 80
const base = process.env.BASE || '/'

if (process.env.NODE_ENV === 'production') {
	// Выполняется, если приложение запущено в режиме продакшн
	console.log('Приложение запущено в режиме продакшн')
} else {
	// Выполняется, если приложение запущено в режиме разработки
	console.log('Приложение запущено в режиме разработки')
}

async function createViteServer() {
	const vite = await createServer({
		server: { middlewareMode: true },
		appType: 'custom',
		base,
	})

	const app = express()

	// Use Vite's middlewares in development
	app.use(vite.middlewares)

	// Middleware to serve fonts in development
	app.use('/assets/fonts', express.static('./dist/client/fonts'))

	// CORS middleware
	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*')
		next()
	})

	// Serve HTML
	app.use('*', async (req, res) => {
		try {
			const url = req.originalUrl.replace(base, '')

			// Always read fresh template in development
			let template
			if (!isProduction) {
				template = await fs.readFile('./index.html', 'utf-8')
				template = await vite.transformIndexHtml(url, template)
			} else {
				template = await fs.readFile('./dist/client/index.html', 'utf-8')
			}

			const render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
			const rendered = await render(url)

			const html = template
				.replace('<!--app-head-->', rendered.head || '')
				.replace('<!--app-html-->', rendered.html || '')

			res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
		} catch (e) {
			vite?.ssrFixStacktrace(e)
			console.log(e.stack)
			res.status(500).end(e.stack)
		}
	})

	// Start the server
	app.listen(port, () => {
		console.log(`Server started at http://localhost:${port}`)
	})
}

async function createProductionServer() {
	const app = express()

	app.use(compression())
	app.use(base, sirv('./dist/client', { extensions: [] }))

	// Middleware to serve fonts in production
	app.use('/assets/fonts', express.static('./dist/client/fonts'))

	// CORS middleware
	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*')
		next()
	})

	// Serve HTML
	app.use('*', async (req, res) => {
		try {
			const url = req.originalUrl.replace(base, '')

			const template = await fs.readFile('./dist/client/index.html', 'utf-8')
			const render = (await import('./dist/server/entry-server.js')).render
			const rendered = await render(url)

			const html = template
				.replace('<!--app-head-->', rendered.head || '')
				.replace('<!--app-html-->', rendered.html || '')

			res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
		} catch (e) {
			console.log(e.stack)
			res.status(500).end(e.stack)
		}
	})

	// Start the server
	app.listen(port, () => {
		console.log(`Server started at http://localhost:${port}`)
	})
}

// Use different logic based on the environment
if (!isProduction) {
	createViteServer()
} else {
	createProductionServer()
}
