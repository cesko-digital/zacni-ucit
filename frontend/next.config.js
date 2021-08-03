const withImages = require('next-images');

module.exports = withImages({
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
  webpack: config => {
    config.module.rules.push({
      oneOf: [
        {
          test: /\.svg$/,
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
