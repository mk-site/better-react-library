const path = require('path');
console.log('build');
console.log(__dirname);
console.log(path.resolve(process.cwd(), './src/d'));
const rollup = require('rollup');
const exec = require('child_process').exec;

// 清空项目的es、lib dist目录
exec(`rollup`, function (error, stdout, stderr) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('构建完成')
})

