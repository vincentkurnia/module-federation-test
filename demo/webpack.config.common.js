const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new ModuleFederationPlugin({
            name: "demo",
            filename: "remoteEntry.js",
            remotes: {},
            exposes: {
                "./Home": "./src/pages/Home.js",
                "./Page1": "./src/pages/Page1.js",
                "./Page2": "./src/pages/Page2.js",
            },
            shared: packageJson.dependencies
        })
    ]
}