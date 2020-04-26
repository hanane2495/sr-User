const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,    
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                       {
                          loader: 'image-webpack-loader',
                          options: {
                              mozjpeg: {
                                   progressive: true,
                                   quality: 65
                                },
                              optipng: {
                                  enabled: false,
                                },
                              pngquant: {
                                  quality: '65-90',
                                  speed: 4
                                },
                              gifsicle: {
                                  interlaced: false,
                                }
                            }
                        }
                ]
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
      },          
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}