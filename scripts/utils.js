const { readDirDeepSync } = require('read-dir-deep');
const path = require('path');
const pkg = require(process.cwd() + '/package.json');
const {
    version,
    author,
    name,
    license
} = pkg || {};

const banner =
`/**
  * ${name} v${version}
  * (c) ${new Date().getFullYear()} ${author}
  * @license ${license || 'ISC'}
  */`;


let getEntryConfig = () => {
    let config = require('../library.config') || {};
    let strArr = (config.entry || '').split('/');
    let obj = {
        entry: config.entry,
        isSingleFile: config.libraryType === 'single'?true:false,
        libraryName: config.libraryName,
        externals: config.externals,
        globals: config.globals || {},
        dir: strArr[0] || 'src',
        version: version,
        ts: (strArr[strArr.length -1] || '').indexOf('ts') > -1 ? true : false
    }
    getEntryConfig = () => {
        return obj;
    }
    return obj;
}
const getDirFile = () => {
    let rootDir = path.resolve(process.cwd(), getEntryConfig().dir);
    let fileArr = readDirDeepSync(rootDir, {
        ignore: [
            '**/*.png',
            '**/*.jpg',
            '**/*.jpeg',
            '**/*.md',
            '**/*.txt',
            '**/.DS_Store',
            '**/.git/**',
            '**/.vscode/**',
            '**/.idea/**',
            '**/__tests__/**',
            '**/__test__/**',
        ]
    });
    return fileArr;
}
module.exports = {
    pkg,
    banner,
    version,
    getEntryConfig,
    getDirFile
};
// export default {
//     pkg,
//     banner,
//     version,
//     getEntryConfig,
//     getDirFile
// }