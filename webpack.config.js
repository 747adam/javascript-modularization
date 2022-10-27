const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    entry: {
        main: "./src/index.js",
        error: "./src/error.js"
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: ["file-loader"]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 10000,
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "monsters123",
            template: "./src/index.html"
        }),
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    devtool: "inline-source-map",
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    name: "vendors"
                }
            }
        }
    }
}

// module.exports = (env, argv) => {
//     if (env.NODE_ENV === 'staging') {

//     }
// }