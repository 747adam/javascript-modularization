const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ImageminPlugin = require('imagemin-webpack-plugin').default


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
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true,
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {
                    implementation: require('sass'),
                    sourceMap: true,
                  },
                },
              ],
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
        new MiniCssExtractPlugin(),
        new ImageminPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i
        })
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