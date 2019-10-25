module.exports = {
    // specify an application entry point
    entry: './src/App.tsx',
    // output location for built bundle
    output: {
        path: __dirname + '/public',
        filename: 'build/app.js'
    },
    // tell Webpack to surpport .ts and .tsx file extensions along with the original .js extension
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}