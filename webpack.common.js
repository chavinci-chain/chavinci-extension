// const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
// const HtmlPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const tailwindcss = require('tailwindcss')
// const autoprefixer = require('autoprefixer')

// module.exports = {
//     entry: {
//         popup: path.resolve('src/popup/index.jsx'),
//         background: path.resolve('src/background/background.js'),
//         contentScript: path.resolve('src/contentScript/contentScript.js'),
//     },
//     module: {
//         rules: [
//             {
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: [
//                             ['@babel/preset-env', { targets: "ie 11" }]
//                         ],
//                     }
//                 },
//                 test: /\.(?:js|mjs|cjs|jsx)$/,
//                 exclude: /node_modules/,
//             },
//             {
//                 test: /\.css$/i,
//                 use: [
//                     'style-loader',
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             importLoaders: 1,
//                         },
//                     },
//                     {
//                         loader: 'postcss-loader', // postcss loader needed for tailwindcss
//                         options: {
//                             postcssOptions: {
//                                 ident: 'postcss',
//                                 plugins: [tailwindcss, autoprefixer],
//                             },
//                         },
//                     },
//                 ],
//             },
//             // {
//             //     type: 'assets/images',
//             //     test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
//             //     use: [
//             //         {
//             //             loader: 'file-loader',
//             //             options: {
//             //                 name: 'assets/images/[name].[ext]',
//             //             },
//             //         },
//             //     ],
//             // },
//             {
//                 test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg)$/i, // resim ve font dosyaları için doğru test ifadesi
//                 type: 'asset/resource', // asset/resource tipi kullanarak resimleri kopyalayalım
//                 generator: {
//                     filename: 'assets/images/[name][ext]' // dosyaların dist klasöründe nereye yerleştirileceğini belirleyelim
//                 }
//             },

//         ]
//     },
//     "plugins": [
//         new CleanWebpackPlugin({
//             cleanStaleWebpackAssets: false
//         }),
//         new CopyPlugin({
//             patterns: [{
//                 from: path.resolve('src/static'),
//                 to: path.resolve('dist')
//             }]
//         }),
//         ...getHtmlPlugins([
//             'popup',
//         ])
//     ],
//     resolve: {
//         extensions: ['.jsx', '.js', '.ts']
//     },
//     output: {
//         filename: '[name].js',
//         path: path.join(__dirname, 'dist')
//     },
//     optimization: {
//         splitChunks: {
//             chunks: 'all',
//         }
//     }
// }

// function getHtmlPlugins(chunks) {
//     return chunks.map(chunk => new HtmlPlugin({
//         title: 'Chavinci Wallet',
//         filename: `${chunk}.html`,
//         chunks: [chunk]
//     }))
// }

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        bundle: path.resolve('src/popup/index.jsx'),
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
                            ['@babel/preset-env', { targets: "ie 11" }],
                            '@babel/preset-react' // React için preset ekleyelim
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
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: {
                    loader: "file-loader",
                    options:{
                        name: "[name].[ext]"
                    }
                }
            },
        ]
    },
    plugins: [
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
        path: path.join(__dirname, 'dist'),
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
