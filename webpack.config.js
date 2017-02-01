var webpack           = require('webpack')
module.exports        = {
    entry  : './app.js',
    output : {
        path    : __dirname,
        filename: 'bundle.js'
    },
    module : {
        loaders: [
            {
                test  : /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test  : /\.jade$/,
                loader: 'jade-loader'
            },
            {
                test  : /\.styl$/,
                loader: 'style-loader!css-loader?sourceMap!autoprefixer-loader!stylus-loader'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by luoyin')
    ]
}