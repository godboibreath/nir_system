import 'dotenv/config';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default {
    mode: process.env.MODE_DEVELOPMENT ? 'development' : 'production',
    entry: path.resolve(dirname, 'src/index.js'),
    output: {
        path: path.resolve(dirname, 'build'),
        filename: 'bundle[fullhash].js',
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    devServer: {
        static: path.resolve(dirname, 'build'),
        historyApiFallback: true,
        port: 5000,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                resolve: {
                    fullySpecified: false,
                },
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: path.resolve(dirname, 'public/index.html'),
        }),
        new CleanWebpackPlugin(),
        new ESLintWebpackPlugin({
            emitWarning: false,
        }),
        new DotenvWebpackPlugin(),
    ],
};
