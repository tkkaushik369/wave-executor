const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/client/client.ts",
	output: {
		filename: "bundle.js",
		library: 'Game',
		libraryTarget: 'umd',
		publicPath: "../client_window",
		path: path.resolve(__dirname, "../dist/client_window"),
	},
	resolve: {
		alias: {
			three: path.resolve("./node_modules/three"),
		},
		extensions: [".tsx", ".ts", ".js"],
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: "ts-loader",
			exclude: /node_modules/,
		},
		{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, "./client/index.html")
		}),
		new CopyPlugin({
			patterns: [
				/* {
					from: path.resolve(__dirname, "./client/index.html"),
					to: path.resolve(__dirname, "../dist/client_window"),
				}, */
				{
					from: path.resolve(__dirname, "./client/images"),
					to: path.resolve(__dirname, "../dist/client_window/images"),
				},
				{
					from: path.resolve(__dirname, "./client/models"),
					to: path.resolve(__dirname, "../dist/client_window/models"),
				},
				{
					from: path.resolve(__dirname, "./client/audios"),
					to: path.resolve(__dirname, "../dist/client_window/audios"),
				},
			],
		}),
	],
}
