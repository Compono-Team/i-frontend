const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { pluginByName, getPlugin } = require('@craco/craco');
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      webpackConfig.resolve.plugins.push(
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js', '.jsx']
        })
      );

      webpackConfig.resolve.fallback = {
        path: require.resolve('path-browserify')
      };

      return webpackConfig;
    }
  }
};
