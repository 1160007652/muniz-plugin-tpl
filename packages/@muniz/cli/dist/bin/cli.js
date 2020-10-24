#!/usr/bin/env node
'use strict';

var _ink = require("ink");

var _CommandApp = require("../core/CommandApp");

/** 导出模块, 方便 与 其他 plugin 插件 处理机制一致 */
// 初始化 命令行 框架
var commandApp = new _CommandApp.CommandApp({
  argv: process.argv.slice(2),
  render: _ink.render
}); // 中间件 => 格式化命令

commandApp.use(_CommandApp.formatArgv); // 中间件 => 判断是否存在命令

commandApp.use(_CommandApp.isCommand); // 中间件 => 整合 cmd 命令参数

commandApp.use(_CommandApp.mergeArgv); // 中间件 => 显示使用帮助

commandApp.use(_CommandApp.helpCommand); // 中间件 => 显示版本号

commandApp.use(_CommandApp.versionCommand); // 中间件 => 执行命令

commandApp.use(_CommandApp.runCommand); // 启动

commandApp.start();