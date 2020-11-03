'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _inkUi = require('@muniz/ink-ui');

var _ink = require('ink');

/**
 * @muniz
 * @description help_tpl_desc
 **/
var Tpl = function Tpl() {
  return /*#__PURE__*/ _react['default'].createElement(
    _ink.Box,
    {
      flexDirection: 'column',
    },
    /*#__PURE__*/ _react['default'].createElement(
      _ink.Text,
      {
        color: 'green',
      },
      'Step-1: \u6536\u96C6\u7528\u6237\u8F93\u5165\u4FE1\u606F',
    ),
    /*#__PURE__*/ _react['default'].createElement(_inkUi.TextInput, {
      placeHolder: '\u6D4B\u8BD5',
    }),
  );
};

Tpl.propTypes = {
  /**
   * @muniz
   * @description help_tpl_flags_desc
   */
  flags: _propTypes['default'].string,
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
