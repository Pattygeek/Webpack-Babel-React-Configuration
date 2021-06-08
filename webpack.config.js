const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(jpg|png|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: ["file-loader"],
			},
		],
	},
	optimization: {
		splitChunks: { chunks: "all" },
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html"),
		}),
		new Dotenv(),
	],
};
