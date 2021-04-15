/**
 * 请不要修改，本页面的 结构， 否则会导致 插件加载失败
 */

import { render } from 'ink';
import React from 'react';
import i18n from './configs/i18n';

// 初始化多语言
i18n.initI18n();

class Life {
  constructor() {
    this.isStart = true; // 安装成功后是否立即执行
    this.defaultCommand = ''; // 插件默认执行命令, 以 muniz 插件名 运行时，执行那条命令，无配置 为 cli 打印 help 命令
  }
}

export default (props) => {
  const { locale } = props;
  // 设置多语言
  i18n.setLocale({ locale });
  return new Life();
};

/**
 * muniz 脚手架（宿主环境）通过此通道执行插件命令
 * @param {object} param
 * @param {string} param.commandType 命令类型，react function
 * @param {string} param.commandPath 执行命令路径
 * @param {object} param.data 插件命令数据
 */
export const pluginCommand = ({ commandType, commandPath, data }) => {
  const _command = require(`./command/${commandPath}`).default;
  console.log(commandType);
  if (commandType === 'function') {
    _command(data);
  } else {
    render(React.createElement(_command, data));
  }
};
