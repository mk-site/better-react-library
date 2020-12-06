const chokidar = require('chokidar');
const chalk = require('chalk');
const ora = require('ora');
const exec = require('child_process').exec;
const spinner = ora('Loading... ').start();
const { getEntryConfig } = require('./scripts/utils');
const { dir } = getEntryConfig();
const ignores = '.git,.DS_Store,.doc,.txt,.md'.split(',')
process.env.NODE_ENV = 'development';
function watch () {
    const watcher = chokidar.watch(dir, {
        ignored: /^.+(__test__|git)?.+\\.(DS_Store|doc|txt|md)?$/, // ignore dotfiles
        persistent: true
    });
    watcher.on('change', (path, stats) => {
        if (ignores.includes(path)) { // 忽略制定文件变化
            return;
        }
        console.log(path + ' change');
        exec(`npm run dev:watch ${path}`, function (error, stdout, stderr) {
            if (error) {
                console.error(error);
                return;
            }
            // console.log(stdout);
            console.log(chalk.green(`${stderr}`));
        })
        if (stats){
            console.log(`File ${path} changed size to ${stats.size}`);
        }
    }).on('error', (error) => {
        watcher.close();
        console.log(`Watcher error: ${error}`);
    })
    return watcher;
}
watch();
setTimeout(() => {
    console.log(`\n${dir}目录监听中...`);
    spinner.stop();
}, 300);