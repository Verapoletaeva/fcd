const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  baseUrl: PRODUCTION ? 'static' : '',
  outputDir: 'build',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      definitions[0] = Object.assign(definitions[0], {
        OUTER_PORT: 80
      });
      return definitions;
    });
  }
};
