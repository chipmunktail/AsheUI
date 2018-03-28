module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: "./app.bundle.js",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    module: {
        rules: [
            {test: /.vue$/, use: ['vue-loader']},
            {test: /.js$/, use: ['babel-loader'], exclude: /node_modules/},
            {test: /.css$/, use: ['style-loader', 'css-loader']},
            {test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /.(html|tpl)$/, use: ['html-loader']}
        ]
    },
    mode: "development"
};