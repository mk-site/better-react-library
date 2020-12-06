// import nodeResolve from '@rollup/plugin-node-resolve';
// import replace from '@rollup/plugin-replace';
// import postcss from 'rollup-plugin-postcss';
// import json from '@rollup/plugin-json';
// import image from '@rollup/plugin-image';
// import { terser } from "rollup-plugin-terser";
// import commonjs from '@rollup/plugin-commonjs';
// import typescript from 'rollup-plugin-typescript2';
// import utils from './utils';

const {nodeResolve} = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const postcss = require('rollup-plugin-postcss');
const json = require('@rollup/plugin-json');
const image = require('@rollup/plugin-image');
const { terser } = require("rollup-plugin-terser");
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const utils = require('./utils.js');
const generatePlugins = ({ts}) => {
    let arr = [
        nodeResolve({
            extensions: ts ? ['ts', 'tsx', '.js', 'jsx' ,'.css']: ['.js', 'jsx' ,'.css']
        }),
        json(),
        commonjs(),
        postcss({
            extract: `index.css`
        }),
        image(),
        replace({
            __VERSION__: utils.version
        })
    ]
    if (ts) {
        arr.push(typescript());
    }
    return arr;
}
const generateTerserPlugin = () => {
    return [
        terser({
            warnings: false,
            compress: {
                drop_console: true
            },
            output: {
                beautify: false
            }
        })
    ]
}

module.exports = {
    generatePlugins,
    generateTerserPlugin
}
