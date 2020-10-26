'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _common = require('@muniz/common');

var TextInput = _common.InkUI.TextInput;
var useState = _common.React.useState;
var Box = _common.Ink.Box,
  Text = _common.Ink.Text,
  useApp = _common.Ink.useApp,
  useFocusManager = _common.Ink.useFocusManager; // 插件模版 测试指令

var Tpl = function Tpl() {
  return /*#__PURE__*/ _common.React.createElement(
    Box,
    {
      flexDirection: 'column',
    },
    /*#__PURE__*/ _common.React.createElement(
      Text,
      {
        color: 'green',
      },
      'Step-1: \u6536\u96C6\u7528\u6237\u8F93\u5165\u4FE1\u606F',
    ),
    /*#__PURE__*/ _common.React.createElement(TextInput, {
      placeHolder: '\u6D4B\u8BD5',
    }),
  );
};

Tpl.propTypes = {
  /**
   * @muniz
   * @description falgs哈哈
   */
  flags: _propTypes['default'].string,

  /**
   * @muniz
   * @description Number类型转换
   */
  count: _propTypes['default'].number,

  /**
   * @muniz
   * @description 生成项目的名称
   * @alias n
   */
  isGit: _propTypes['default'].bool,
};
Tpl.defaultProps = {
  flags: 'wowowoowqqqqqqq',
  isGit: false,
  count: 1,
};
var _default = Tpl;
exports['default'] = _default;
