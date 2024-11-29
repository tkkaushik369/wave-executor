import type { Configuration } from 'webpack'

import { rules } from './webpack.rules'
import { plugins } from './webpack.plugins'

export const MainConfig: Configuration = {
	// Put your normal webpack config below here
	target: 'electron-main',
	experiments: { asyncWebAssembly: true },
	module: {
		rules,
	},
	plugins,
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
	},
}
