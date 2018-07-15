import express from 'express';
import path from 'path';

const server = express();

const webpack = require('webpack');
const config = require('../../config/webpack.dev');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
	overlay: true,
	reload: true,
	timeout: 100,
	overlayWarnings: true,
});

const staticMiddleware = express.static(path.join(__dirname, '../../dist'));

server.use(webpackHotMiddleware);
server.use(webpackDevMiddleware);

server.use(staticMiddleware);

server.listen(8000, () => {
	console.log('Server is listenning');
});
