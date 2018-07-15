const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
	entry: ['core-js/fn/promise', path.resolve(__dirname, '../src/main.js')],
	output: {
		filename: '[name]-output.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
	},
	mode: 'development',
	devtool: 'cheap-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							attrs: ['img:src'],
						},
					},
				],
			},
			{
				test: /\.(jpe?g|png|gif)/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[hash:8].[ext]',
						},
					},
				],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, '../dist'),
		compress: true,
		port: 9000,
		hot: true, // включить hot module replacement
		overlay: true, // показывать ошибки в оверлее
		stats: {
			color: true,
		},
	},
	target: 'web',
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '..'),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new FaviconsWebpackPlugin({
			logo: path.resolve(__dirname, '../public/favicon.png'),
			inject: true,
			background: '#fff',
			title: 'Arival icon',
			icons: {
				android: true,
				appleIcon: true,
				appleStartup: true,
				coast: false,
				favicons: true,
				firefox: true,
				opengraph: false,
				twitter: false,
				yandex: false,
				windows: false,
			},
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.ejs'),
			title: 'Arival App',
		}),
	],
};
