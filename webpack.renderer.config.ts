import type { Configuration } from 'webpack'
import path from 'node:path'
import { rules } from './webpack.rules'
import { plugins } from './webpack.plugins'

rules.push({
	test: /\.css$/,
	use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
})

export const rendererConfig: Configuration = {
	experiments: { asyncWebAssembly: true },
	module: {
		rules,
	},
	plugins,
	resolve: {
		alias: {
			three: path.resolve(__dirname, './node_modules/three'),
			'socket.io': path.resolve(__dirname, 'node_modules/socket.io/client-dist/socket.io.min.js'),
		},
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json', '.wasm'],
	},
	externals: [
		'canvas', // jsdom dependency not needed
	],
}
