import path from 'path';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
// import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
const { generateTerserPlugin } = require('./scripts/plugins');
const {banner, getDirFile,getEntryConfig} = require('./scripts/utils');
const config = getEntryConfig();
const generatePlugins = ({ts}) => {
    let arr = [
        nodeResolve({
            extensions: ts ? ['.ts', '.tsx', '.js', '.jsx' ,'.css']: ['.js', '.jsx' ,'.css']
        }),
        json(),
        commonjs(),
        !ts && babel({
            // exclude: 'node_modules/**',
            babelHelpers: 'runtime'
        }),
        ts && typescript(),
        postcss({
            extract: `index.css`
        }),
        image(),
        replace({
            exclude: 'node_modules/**',
            __VERSION__: config.version
        })
    ]
    return arr;
}


console.log('配置文件：', config);
let externals = ['react', 'react-dom','react-router-dom', 'antd', 'antd-mobile','@ant-design/icons', 'classnames', 'lodash', 'prop-types'];
if (Array.isArray(config.externals)) {
    externals = externals.concat(config.externals);
}
function resolvePath(str) {
    return path.resolve(__dirname, str);
};
let isProduction = false;
let readDirDeepSync = process.argv.splice(4) || [];
if (readDirDeepSync.length <= 0) {
    if (!config.isSingleFile) {
        readDirDeepSync = getDirFile();
    }
    isProduction = true;
}
console.log(`${config.dir}目录文件`, readDirDeepSync);
const generateOutputFile = (filePath, type) => {
    return resolvePath(filePath.replace(/.(tsx|ts|jsx)$/g, '.js').replace(`${config.dir}/`, `${type}/`));
}
const productionSingleFileConfig = () => { // 
    let obj = {
        input: config.entry,
        output: [
            {file: 'es/index.js', format: 'es', banner},
            {file: 'lib/index.js', format: 'cjs', banner},
        ],
        plugins: generatePlugins({ts: config.ts})
    }
    if (!config.ts) {
        obj.external = (id) => {
            if (/^@babel/.test(id) || /tslib/i.test(id) || externals.includes(id)) {
                return true;
            }
            return false;
        }
    }
    return obj;
}
const createConfigObj = (filePath) => {
    let output = [];
    output.push({ file: generateOutputFile(filePath, 'es'), format: 'es', exports: 'named'})
    if (isProduction) {
        output.push({ file: generateOutputFile(filePath, 'lib'), format: 'cjs', exports: 'named'}) 
    }
    return {
        entry: resolvePath(filePath),
        output: output,
    }
}
const createEntryObj = (filePath, isTerser = false) => {
    return {
        entry: resolvePath(filePath),
        output: [
            {
                file: isTerser ? generateOutputFile(filePath, 'dist').replace('.js', '.min.js') : generateOutputFile(filePath, 'dist'),
                banner,
                globals:{
                    react: 'React',
                    ...config.globals
                },
                name: config.libraryName,
                format: 'umd',
                plugins: isTerser ? generateTerserPlugin() : []
            }
        ],
        isEntryFile: true
    }
}
function createConfig(option) {
    let {entry, output, isEntryFile} = option;
    let obj = {
        input: entry,
        output: output,
        plugins: generatePlugins({ts: config.ts})
    };
    obj.external = (id, parent) => {
        if (isEntryFile) {
            if (/^@babel/.test(id) || /tslib/i.test(id) || externals.includes(id)) {
                return true;
            }
        } else {
            if (id.indexOf('./') === 0 || id.indexOf('../') === 0 || /^@babel/.test(id) || /tslib/i.test(id) || externals.includes(id)) {
                return true;
            }
        }
        return false;
    };
    return obj;
}
const productionMultiConfig = () => {
    let configArr = [];
    readDirDeepSync.forEach((filePath) => {
        configArr.push(createConfig(createConfigObj(filePath)));
        // 主入口文件， 入口文件打包到dist目录
        if (config.ts && filePath == config.entry) {
            configArr.push(createConfig(createEntryObj(filePath)));
            configArr.push(createConfig(createEntryObj(filePath, true))); // 带压缩
        }
    })
    return configArr;
}
export default () => {
    if (config.isSingleFile) { // 单文件打包
        return productionSingleFileConfig();
    }
    return productionMultiConfig(); // 多文件打包
}