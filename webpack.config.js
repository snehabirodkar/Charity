const path = require('path');
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];
module.exports = {
    entry: './app/assets/scripts/app.js',
    output:{
        filename: "app.bundled.js",
        path: path.resolve(__dirname,"app"), //ye resolve krta & dir me udr app.js leta h
    },

    devServer:{
        before: function (app,server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname,"app"),
        hot: true,
        port: 4000,
        host: '0.0.0.0'
    },
    mode: "development",
    module: {
        rules: [
            {
                test:/\.css$/i,
                use: [
                    'style-loader',
                    'css-loader?url=false',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: postCSSPlugins
                        }
                    }
                ],
            }
        ]
    }
}