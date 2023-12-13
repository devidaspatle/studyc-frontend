const Dotenv = require('dotenv-webpack');
module.exports = {
    entry: 'src/client.js',
    output: {
      filename:'bundle.js',
        //path: './public',
        path:__dirname + 'dist',
        publicPath: "./public" 
    },


    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              loader: 'babel-loader',

              exclude: /node_modules/,
              query: {
                cacheDirectory: true,
                presets: ['react', 'es2015']
              }              
            }
          ]
        plugins: [
            new Dotenv()
          ]
    },
    //devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
      },
      devServer: { historyApiFallback: true }, // to serve your index.html in place of 404 responses
};