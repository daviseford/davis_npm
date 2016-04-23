/**
 * Created by loaner on 4/22/16.
 */

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel_loader'}
        ]
    }
    output: {
        filename: 'index_bundle.js',
        path: __dirname + '/app/out'
    },
    plugins: [HTMLWebpackPluginConfig]
};
