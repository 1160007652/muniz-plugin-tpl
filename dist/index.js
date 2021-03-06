'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.pluginCommand = exports['default'] = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _ink = require('ink');

var _react = _interopRequireDefault(require('react'));

var _i18n = _interopRequireDefault(require('./configs/i18n'));

/**
 * 请不要修改，本页面的 结构， 否则会导致 插件加载失败
 */
// 初始化多语言
_i18n['default'].initI18n();

var Life = function Life() {
  (0, _classCallCheck2['default'])(this, Life);
  this.isStart = true; // 安装成功后是否立即执行

  this.defaultCommand = ''; // 插件默认执行命令, 以 muniz 插件名 运行时，执行那条命令，无配置 为 cli 打印 help 命令
};

var _default = function _default(props) {
  var locale = props.locale; // 设置多语言

  _i18n['default'].setLocale({
    locale: locale,
  });

  return new Life();
};
/**
 * muniz 脚手架（宿主环境）通过此通道执行插件命令
 * @param {object} param
 * @param {string} param.commandType 命令类型，react function
 * @param {string} param.commandPath 执行命令路径
 * @param {object} param.data 插件命令数据
 */

exports['default'] = _default;

var pluginCommand = function pluginCommand(_ref) {
  var commandType = _ref.commandType,
    commandPath = _ref.commandPath,
    data = _ref.data;

  var _command = require('./command/'.concat(commandPath))['default'];

  if (commandType === 'function') {
    _command(data);
  } else {
    (0, _ink.render)(/*#__PURE__*/ _react['default'].createElement(_command, data));
  }
};

exports.pluginCommand = pluginCommand;
