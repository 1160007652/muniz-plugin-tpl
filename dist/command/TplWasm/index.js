'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _i18n = _interopRequireDefault(require('../../configs/i18n'));

/**
 * @muniz
 * @type function
 * @description help_tpl_wasm_desc
 */
var TplWasm = /*#__PURE__*/ (function () {
  var _ref = (0, _asyncToGenerator2['default'])(
    /*#__PURE__*/ _regenerator['default'].mark(function _callee() {
      return _regenerator['default'].wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              console.log(_i18n['default'].getLocale('help_tpl_wasm_info'));

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    }),
  );

  return function TplWasm() {
    return _ref.apply(this, arguments);
  };
})();

TplWasm.propTypes = {
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
   * @description help_tpl_react_git_desc
   * @alias n
   */
  isGit: _propTypes['default'].bool,
};
TplWasm.defaultProps = {
  inputa: 'ssss',
  flags: '测试',
  isGit: false,
};
var _default = TplWasm;
exports['default'] = _default;
