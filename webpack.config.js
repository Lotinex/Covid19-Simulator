const Path = require('path');

module.exports = {
    entry: "./src/Main.ts",
    output: {
        filename: "main.js",
        path: Path.resolve(__dirname, 'dist/js')
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'source-map-loader',
                enforce: 'pre' 
            },
            {
                test: /\.ts$/,
                enforce: "pre",
                use: [
                  {
                    loader: "eslint-loader",
                    options: {
                      emitError: true,
                      fix: true
                    }
                  }
                ]
            },
            {
                test: /\.ts$/,
                use: [
                  {
                    loader: "ts-loader",
                    /*
                    options: {
                      transpileOnly: true
                    }*/
                  }
                ]
            }
        ]
    },
}