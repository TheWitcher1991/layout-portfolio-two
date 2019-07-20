const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: [
        './app/src/tools/js/index.js',
        './app/src/tools/css/index.css'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './static/script/script.bundle.js',
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'static/img/[name].[ext]',
                    }
                }]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.html', '.css']
    },
    plugins: [
        //new CleanWebpackPlugin(),
        // new ExtractTextPlugin({filename: 'style/style.bundle.css', disable: false, allChunks: true}),
        new MiniCssExtractPlugin({filename: 'static/style/style.bundle.css'}),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './app/index.html',
            filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            $: './app/src/libs/libs.min.js',
            jQuery: './app/src/libs/libs.min.js',
            'window.$': './app/src/libs/libs.min.js'
        })
    ]
}
