const path = require('path')

module.exports = {
    babel: {
        plugins: [['import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            //style为true即是less,设置了主题自定义需要改为true
            style: 'css',
        }]],
    },
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    }
};