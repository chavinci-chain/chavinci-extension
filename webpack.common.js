const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
    entry: {
        popup: path.resolve('src/popup/index.jsx'),
        background: path.resolve('src/background/background.js'),
        contentScript: path.resolve('src/contentScript/contentScript.js'),
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "ie 11" }]
                        ],
                    }
                },
                test: /\.(?:js|mjs|cjs|jsx)$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader', // postcss loader needed for tailwindcss
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [tailwindcss, autoprefixer],
                            },
                        },
                    },
                ],
            },
            // {
            //     type: 'asset/resource',
            //     test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[path][name].[ext]',
            //             },
            //         },
            //     ],
            // },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                type: 'asset',
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: require.resolve('@svgr/webpack'),
                        options: {
                            prettier: false,
                            svgo: false,
                            svgoConfig: {
                                plugins: [{ removeViewBox: false }]
                            },
                            titleProp: true,
                            ref: true
                        }
                    },
                    {
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash].[ext]'
                        }
                    }
                ],
                issuer: {
                    and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
                }
            },
        ]
    },
    "plugins": [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve('src/static'),
                to: path.resolve('dist')
            }]
        }),
        ...getHtmlPlugins([
            'popup',
        ])
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.ts']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }
}

function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HtmlPlugin({
        title: 'Chavinci Wallet',
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}