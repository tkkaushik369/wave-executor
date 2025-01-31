const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require("path")

module.exports = merge(common, {
	mode: "development",
	devtool: "eval-source-map",
	devServer: {
		static: {
			directory: path.join(__dirname, "../dist/client_window"),
		},
		hot: true,
		proxy: [{
			context: "/socket.io",
			target: "http://127.0.0.1:3000",
			changeOrigin: true,
			ws: true,
		},
		{
			context: '*',
			target: 'ws://127.0.0.1:3000',
			changeOrigin: true,
			ws: true,
		},
		],
	},
})
