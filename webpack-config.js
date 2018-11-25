module.exports = {
    devtool: 'source-map',
    entry: "./lib/App.tsx",
    mode: "development",
    output: {
        filename: "./bundle.js"
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
        rules: [{
            test: /\.tsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'ts-loader'
            }
        }]
    }
}
