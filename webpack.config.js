const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env, options) => {
    const debug = options.mode === 'development';
    const mode = debug ? 'development' : 'production';
    const config = {
        mode,
        devtool: debug ? 'source-map' : 'none',
        watch: false,
        entry: ['src/index.js', './sass/style.css'],
        output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'main.js'
        },
        plugins: [
            new HtmlWebpackPlugin({template: './index.html'}),
            new MiniCssExtractPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                    use: [
                        {
                        loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
    };
    return config;
  };
