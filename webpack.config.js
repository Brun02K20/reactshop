const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
    mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias:{
			"@components": path.resolve(__dirname, 'src/components/'),
			"@containers": path.resolve(__dirname,'src/containers/'),
            "@styles": path.resolve(__dirname,'src/styles/'),
            "@pages": path.resolve(__dirname,'src/pages/'),
            "@icons": path.resolve(__dirname,'src/assets/icons/'),
			"@logos": path.resolve(__dirname,'src/assets/logos/'),
			"@routes": path.resolve(__dirname,'src/routes/')
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
            {
                test: /\.(css|scss)$/ ,
				/*aquí en test agregas la expresión regular para procesar los diferentes tipos de imagenes que tengas.*/
                use: ["style-loader","css-loader", "sass-loader"]
            },
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
	],
    devServer: {
        allowedHosts: path.join(__dirname, 'dist'),
        compress: true,
        port: 3005,
		historyApiFallback: true,
    }
}