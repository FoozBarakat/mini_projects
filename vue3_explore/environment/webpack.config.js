const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist',
	},
	module: {
		rules: [
			{
				test: /\.js%/,
				exclude: /(node_modules)/,
				use: 'babel-loader',
			},
			{
				test: /\.(css|sass|scss)$/,
				// using style loader
				// use: ['style-loader', 'css-loader', 'sass-loader'],
				// using plugin
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.css',
		}),
	],
	watch: true,
};
