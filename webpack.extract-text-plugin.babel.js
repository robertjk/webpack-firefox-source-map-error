import webpackMerge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { default as commonConfig, cssRule } from './webpack.common.babel.js';


cssRule.use = ExtractTextPlugin.extract(cssRule.use);


export default webpackMerge(commonConfig, {
    module: {
        rules: [cssRule]
    },
    plugins: [
        new ExtractTextPlugin('styles-bundle.css')
    ]
});
