const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const mode = process.env.NODE_ENV || 'development'
const devMode = mode === 'development'
const target = devMode ? 'web' : 'browserslist'
const devtool = devMode ? 'source-map' : undefined

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        open: true,
        hot: true,
    },
    entry: [ 
        '@babel/polyfill',
        path.resolve(__dirname, 'src/js', 'main.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].js',
        // assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'src', 'index.html'),
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        })
    ],
    module: {
        rules: [
            // {
            //     test: /\.html$/i,
            //     loader: "html-loader",
            // },

            {
                test: /\.(woff2?|ttf|eot)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },

            {
                test: /\.(jpe?g|png|webp|gif|svg)?$/i,
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
                    // filename: 'images/[name][ext]'
                    filename: 'images/[hash][ext][query]'
                }
            },

            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  devMode ? "style-loader" : MiniCssExtractPlugin.loader,                  
                  // Translates CSS into CommonJS
                  "css-loader",
                  {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [require('postcss-preset-env')],
                        }
                    }
                  },
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },

            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ],
    },
}