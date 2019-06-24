const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.resolve(__dirname,'./src/main.js'),
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname,'./src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
    ],
    devServer: { // 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
        //  --open --port 3000 --contentBase src --hot
        open: true, // 自动打开浏览器
        port: 3000, // 设置启动时候的运行端口
        contentBase: 'src', // 指定托管的根目录
        hot: true // 启用热更新 的 第1步
      },
    module: { // 这个节点，用于配置 所有 第三方模块 加载器 
        rules: [ // 所有第三方模块的 匹配规则
            {test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {test: /\.less$/, use: ['style-loader', 'css-loader','less-loader']},
            {test: /\.sass$/, use: ['style-loader', 'css-loader','sass-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/,use: [{
                loader: 'url-loader', 
                options:{limit:7630,name:'[hash:8]-[name].[ext]'}
            }]},
            {test: /\.(ttf|woff2|woff|eot|svg)$/,use:[{
                loader: 'url-loader'
            }]},
            {test: /\.js$/, use:'babel-loader',exclude: /node_modules/},
            {test: /\.vue$/, use: 'vue-loader'}
            
        ]
      },
    resolve: {
        alias: {
            /* "vue$": "vue/dist/vue.js" */
        }
    }

};


// [{loader: 'url-loader', options:{limit:7630}}]