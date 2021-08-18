const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
  target: 'serverless',
  webpack: config => {
    config.module.rules.push({
      oneOf: [
        {
          test: /\.svg$/,
          include: path.resolve('src/icons'),
          loader: '@svgr/webpack',
        },
        {
          test: /\.svg$/,
          loader: 'url-loader',
        },
      ],
    });

    return config;
  },
});
