import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';


let cssRule = {
    test: /\.(scss|css)$/,
    use: [
        {
            loader: 'css-loader',
            options: { sourceMap: true }
        },
        {
            loader: 'sass-loader',
            options: { sourceMap: true }
        },
    ]
};

let config = {
    entry: './src/app.js',
    output: {
        filename: 'app-bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080/'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 8080
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};


export { config as default, cssRule };
