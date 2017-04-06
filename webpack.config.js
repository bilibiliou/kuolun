let webpack  = require('webpack'),
    path     = require('path'),
    fs       = require('fs'),
    manifest = require('./manifest.json'),
    {resolve, join} = path,
    env = process.env.NODE_ENV;

let plugins = [
    new webpack.BannerPlugin(
        fs
          .readFileSync('./LICENSE')
          .toString('utf-8')),
    new webpack.DllReferencePlugin({context: __dirname, manifest})
];

// if (env === 'pro') {

// } else {
//  plugins.push()
// }

let config = {
        // context: resolve(__dirname, 'src'), 
    entry: {
        app: [
            './src/jsx/app.jsx',
            './src/style/app.less'
        ]
    },

    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devtool: false,

    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',     
            query: {
                presets: [
                    'stage-2',
                    'es2015',
                    'react'
                ]
            }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','react']
            }
        },{
            test: /\.less$/,
            loader: 'style!css!autoprefixer!less'
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins
}

module.exports = config;