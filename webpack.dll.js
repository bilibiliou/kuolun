const path = require('path');
const {join, resolve} = path;
const webpack = require('webpack');
const vendors = [
    'react',
    'react-dom',
    'react-redux',
    'redux'
]

module.exports = {
    output: {
        path: resolve(__dirname, './dist'),
        filename: '[name].js',
        library: '[name]'
    },
    entry: {
        vendor: vendors
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname
        })
    ]
}