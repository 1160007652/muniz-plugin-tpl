'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _i18n = _interopRequireDefault(require('../../configs/i18n'));

/**
 * @muniz
 * @type function
 * @description help_tpl_function_desc
 */
var TplFunction = function TplFunction() {
  console.log(_i18n['default'].getLocale('tpl_function_command_info'));
};

TplFunction.propTypes = {
  /**
   * @muniz
   * @description help_tpl_react_flags_desc
   * @alias i
   */
  inputa: _propTypes['default'].string.isRequired,

  /**
   * @muniz
   * @positionsArgs 1
   */
  flags: _propTypes['default'].string,

  /**
   * @muniz
   * @description 生成项目的名称
   * @alias n
   */
  isGit: _propTypes['default'].bool,
};
TplFunction.defaultProps = {
  inputa: 'ssss',
  flags: '测试',
  isGit: false,
};
var _default = TplFunction;
exports['default'] = _default;
