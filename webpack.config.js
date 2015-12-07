const ENV = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production'
};

const NODE_ENV = process.env.NODE_ENV || ENV.DEVELOPMENT;

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: "./app/frontend/app"
    },
    output: {
        path: __dirname + '/public',
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    watch: NODE_ENV == ENV.DEVELOPMENT,
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};
