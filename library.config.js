module.exports = {
    entry: 'src/index.ts', // 入口文件  以ts结尾，表示此项目为ts
    libraryName: 'HXLibrary',  // 类库打包的全局变量
    // libraryType: 'single', // single: 单文件打包， 默认是多组件打包
    externals: [],
    globals: {}
}