// 运行在 Electron 主进程 下的插件入口

function onLoad(plugin) {
	console.log('onload', plugin);
}

function onBrowserWindowCreated(window, plugin) {
	console.log('onBrowserWindowCreated', window, plugin);
}

module.exports = {
    onLoad,
    onBrowserWindowCreated
}
