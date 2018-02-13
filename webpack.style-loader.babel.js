import webpackMerge from 'webpack-merge';

import { default as commonConfig, cssRule } from './webpack.common.babel.js';


cssRule.use.unshift({
    loader: 'style-loader',
    options: {
        sourceMap: true
    }
});


export default webpackMerge(commonConfig, {
    module: {
        rules: [cssRule]
    }
});
