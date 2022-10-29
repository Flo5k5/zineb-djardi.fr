////////////////////////////////////////////////////////////////
//
//  ©PRAKT
//
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//
//  REQUIRE
//
////////////////////////////////////////////////////////////////
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

////////////////////////////////////////////////////////////////
//
//  NODE_ENV
//
////////////////////////////////////////////////////////////////

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev';

////////////////////////////////////////////////////////////////
//
//  DEFINE VARS
//
////////////////////////////////////////////////////////////////

const jsPath= './js';
const scssPath = './scss';
const outputPath = './public';
// const localDomain = 'http://localhost:8888/clients/danny_arens/web/site/cyrrca.site';
const entryPoints = {
  'app': jsPath + '/index.js',
  'style': scssPath + '/index.scss',
};

////////////////////////////////////////////////////////////////
//
//  SETUP
//
////////////////////////////////////////////////////////////////

module.exports = {
    entry: entryPoints,
    devtool: 'inline-source-map',

    output: {
        path: path.resolve(__dirname, outputPath),
        filename: '[name].js',
    },

    resolve: {
        extensions: ['', '.js'],
        alias: {
          'global': path.resolve(__dirname, jsPath)
        }
      },

    plugins: [
        new webpack.DefinePlugin({
            IS_DEVELOPMENT
        }),

        new MiniCssExtractPlugin({
            //filename: '[name].css',
            filename: 'app.css'
        }),

        new webpack.ProvidePlugin({
            'globals': 'globals'
          })

        // Uncomment this if you want to use CSS Live reload
        // new BrowserSyncPlugin({
        //     proxy: localDomain,
        //     files: [ outputPath + '/*.css' ],
        //     injectCss: true,
        // }, { reload: false, }),
    ],
  
    module: {
        rules: [
            
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.glsl$/,
                loader: 'webpack-glsl-loader'
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    },
                    {
                        loader: 'css-loader'

                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
};
