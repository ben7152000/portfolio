const path = require('path')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: undefined,
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    assetModuleFilename: 'static/images/[hash:10][ext][query]'
  },
  module: {
    rules: [
      // 處理css
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            // 處理css兼容性問題
            // 配合package.json中browserslist來指定兼容性
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env']
              }
            }
          }]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            // 處理css兼容性問題
            // 配合package.json中browserslist來指定兼容性
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env']
              }
            }
          },
        'sass-loader'
        ]
      },
      // 處理圖片
      {
        test: /\.(jpe?g|png|gif|webp|svg)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },
      // 處理其他資源
      {
        test: /\.(woff2?|ttf)/,
        type: 'asset/resource'
      },
      // 處理js
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          cacheCompression: false,
          plugins: [
            'react-refresh/babel' // 激活react HMR 功能
          ]
        }
      }
    ]
  },
  plugins: [
    new EslintWebpackPlugin({
      context: path.resolve(__dirname, '../src'),
      exclude: 'node_modules',
      cache: true,
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    // 激活react HMR 功能
    new ReactRefreshWebpackPlugin()
  ],
  mode: 'development',
  devtool: 'cheap-module-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}.js`
    }
  },
  // webpack解析模塊加載選項
  resolve: {
    // 自動補全文件擴展名
    extensions: ['.jsx', '.js', '.json']
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true // 解決前端路由刷新404問題
  }
}
