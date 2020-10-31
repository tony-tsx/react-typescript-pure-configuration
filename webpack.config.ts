import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import Webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

interface Configuration extends Webpack.Configuration {
  devServer?: WebpackDevServer.Configuration
}

const configuration: Configuration = {
  entry: path.resolve( 'src', 'index.tsx' ),
  output: {
    path: path.resolve( 'dist' ),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [ 'babel-loader', 'ts-loader' ],
        exclude: [ path.resolve( 'node_modules' ) ]
      }, {
        test: /\.pug/,
        loader: 'pug-loader'
      }, {
        test: /\.styl(us)?$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader' ],
      }, {
        test: /\.s[ac]ss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
      }, {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images'
        }
      }, {
        test: /\.(woff(2)?|ttf|eot)$$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/fonts'
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.json', '.js', '.jsx' ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: path.resolve( 'index.pug' )
    } )
  ]
}

export default configuration
