const path = require('path')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[contenthash:10].js',
    chunkFilename: 'static/js/[name].[contenthash:10].chunk.js',
    assetModuleFilename: 'static/images/[hash:10][ext][query]',
    clean: true
  },
  module: {
    rules: [
      // 處理css
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
          MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:10].css',
      chunkFilename: 'static/css/[name].[contenthash:10].chunk.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../dist'),
          globOptions: {
            // 忽略index.html文件
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ],
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}.js`
    },
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              [
                'svgo',
                {
                  plugins: [
                    'preset-default',
                    'prefixIds',
                    {
                      name: 'sortAttrs',
                      params: {
                        xmlnsOrder: 'alphabetical'
                      }
                    }
                  ]
                }
              ]
            ]
          }
        }
      })
    ]
  },
  // webpack解析模塊加載選項
  resolve: {
    // 自動補全文件擴展名
    extensions: ['.jsx', '.js', '.json']
  }
}
