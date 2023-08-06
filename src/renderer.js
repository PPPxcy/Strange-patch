// 运行在 Electron 渲染进程 下的页面脚本

function onLoad() {
	console.log('onLoad');
}

function onConfigView(view) {
	console.log('onConfigView', view);
}

export {
    onLoad,
    onConfigView
}
