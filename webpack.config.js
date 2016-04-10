const webpack = require('webpack');
const PATH = {
	input: __dirname + '/client/source/',
	output: __dirname + '/client/build/'
};

module.exports = {
	entry: PATH.input + 'index.js',
	output: {
		path: PATH.output,
		filename: 'main.js'
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				include: PATH.input,
				exclude: '/node_modules/',
				loader: 'jshint-loader'
			}
		],
		loaders: [
			{
				test: /\.js$/,
				include: PATH.input,
				exclude: '/node_modules/',	
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style!css!autoprefixer!sass',
				exclude: '/node_modules/'
			}
		]
	},
	devServer: {
		contentBase: PATH.output,
		hot: true,
		inline: true,
		progress: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}
