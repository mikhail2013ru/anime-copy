const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")

const mode = process.env.NODE_ENV || 'development' 
const devMode = mode === 'development'
const target = devMode ? 'web' : 'browserslist'
const devtool = devMode ? 'source-map' : undefined

module.exports = {
    mode,
    target,
    devtool,
    entry: {
        main: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'js/[name].js',
        sourceMapFilename: "js/[name].js.map",
        // assetModuleFilename: 'assets/[name][ext]'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        hot: true,
        open: true
    },
    module: {
        rules: [
            // {
            //     test: /\.html$/i,
            //     loader: 'html-loader',
            // },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? "style-loader" : miniCss.loader,    
                    "css-loader",
                    "sass-loader"
                ],
            },
            // {
            //     test: /\.(woff2?|ttf|eot|otf|svg)$/i,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'fonts/[name][ext]'
            //     }
            // },
            {
                // test: /\.(jpe?g|png|webp|gif|svg)?$/i,
                test: /\.(jpg|png|webp|gif|svg)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                            progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                            enabled: false,
                            },
                            pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                            },
                            gifsicle: {
                            interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                            quality: 75
                            }
                        }
                    }
                ],
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                }
            },
        ],
    },
    devtool: false,
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            // template: require('./src/index.html')
        }),
        new miniCss({
            filename: 'css/style.css',
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map[query]',
            exclude: ['vendor.js'],
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/img", to: "img" },
              { from: "src/fonts", to: "fonts" },
              { from: "src/css/font-awesome.css", to: "css" },
              { from: "src/css/elegant-icons.css", to: "css" },
              { from: "src/login.html", to: "login.html" },
              { from: "src/categories.html", to: "categories.html" },
              { from: "src/anime-details.html", to: "anime-details.html" },
            ],
        }),
    ],
}