const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');



module.exports = {
    target: 'web', // This makes Webpack treat the environment as Node.js

    resolve: {
        alias: {
            process: 'process/browser'
        }
    },
    entry: './src/index.js', // Point d'entrée de ton application
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Si tu veux utiliser Babel pour la compatibilité
                },
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html', // Template HTML
        }),
        new Dotenv({
            path: './.env', // Path to .env file (this is the default)
            safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
        })
    ],
    mode: 'production', // Mode de production pour minimiser le code
    devServer: {
        static: './dist', // Dossier à servir
        open: true, // Ouvrir automatiquement dans le navigateur
    },
};
