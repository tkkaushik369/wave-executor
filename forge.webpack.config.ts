import { WebpackPluginConfig } from './src/plugin-webpack/Config'
import { merge } from 'webpack-merge'
import { MainConfig } from './webpack.main.config'
import { rendererConfig } from './webpack.renderer.config'
import { RendererTargetType } from './src/plugin-webpack/Config'

var config: WebpackPluginConfig = {
	mainConfig: merge(MainConfig, {
		/**
		 * This is the main entry point for your application, it's the first file
		 * that runs in the main process.
		 */
		entry: './src/electronApp/index.ts',
	}),
	renderer: {
		config: rendererConfig,
		nodeIntegration: RendererTargetType.ElectronRendererNode,
		entryPoints: [
			{
				name: 'main_window',
				html: './src/electronApp/main_window/index.html',
				js: './src/electronApp/main_window/renderer.tsx',
			},
			{
				name: 'client_window',
				html: './src/client/index.html',
				js: './src/client/client.ts',
				nodeIntegration: false,
			},
		],
	},
	port: 3001,
	devContentSecurityPolicy:
		"default-src 'self'; connect-src 'self' ws://localhost:3000; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' 'unsafe-inline'",
	devServer: {
		hot: true,
	},
}
export default config
