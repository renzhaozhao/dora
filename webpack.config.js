module.exports = function(webpackConfig, env) {
    console.log(env);
    webpackConfig.babel.plugins.push('transform-runtime');
    webpackConfig.babel.plugins.push(['import', {
        libraryName: 'antd',
        style: 'css',
    }]);

    webpackConfig.devtool = '#eval';

    return webpackConfig;
};
