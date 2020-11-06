'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _inkUi = require('@muniz/ink-ui');

var _ink = require('ink');

var _i18n = _interopRequireDefault(require('../../configs/i18n'));

/**
 * @muniz
 * @type react
 * @description help_tpl_react_desc
 **/
var TplReact = function TplReact() {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];

  var _useState3 = (0, _react.useState)([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
    _useState4 = (0, _slicedToArray2['default'])(_useState3, 2),
    tableList = _useState4[0],
    setTablList = _useState4[1];

  (0, _react.useEffect)(function () {
    var timer = setInterval(function () {
      setCount(function (state) {
        return state > 8 ? 0 : state + 1;
      });
    }, 300);
    return function () {
      clearInterval(timer);
    };
  }, []);
  (0, _react.useEffect)(
    function () {
      var _tempData = tableList.map(function (item, index) {
        if (index === 1) {
          item[1] = count;
        }

        return item;
      });

      setTablList(_tempData);
    },
    [count],
  );
  return /*#__PURE__*/ _react['default'].createElement(
    _react.Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(
      _ink.Box,
      {
        flexDirection: 'column',
        marginBottom: '1',
        marginTop: '1',
      },
      /*#__PURE__*/ _react['default'].createElement(
        _ink.Text,
        null,
        _i18n['default'].getLocale('tpl_react_command_state'),
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _ink.Text,
        null,
        _i18n['default'].getLocale('tpl_react_command_timer', {
          count: count,
        }),
      ),
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _ink.Box,
      {
        flexDirection: 'column',
        marginBottom: '1',
      },
      /*#__PURE__*/ _react['default'].createElement(
        _ink.Text,
        null,
        '@muniz/ink-ui \u300C Table '.concat(_i18n['default'].getLocale('component'), ' \u300D'),
      ),
      /*#__PURE__*/ _react['default'].createElement(_inkUi.Table, {
        data: tableList,
      }),
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _ink.Box,
      {
        flexDirection: 'column',
        marginBottom: '1',
      },
      /*#__PURE__*/ _react['default'].createElement(
        _ink.Text,
        null,
        '@muniz/ink-ui \u300C Spinner  '.concat(_i18n['default'].getLocale('component'), ' \u300D'),
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _inkUi.Spinner,
        null,
        /*#__PURE__*/ _react['default'].createElement(
          _ink.Text,
          null,
          _i18n['default'].getLocale('tpl_react_command_loding'),
        ),
      ),
    ),
  );
};

TplReact.propTypes = {
  /**
   * @muniz
   * @description help_tpl_react_flags_desc
   */
  flags: _propTypes['default'].string,
  count: _propTypes['default'].number,

  /**
   * @muniz
   * @description help_tpl_react_git_desc
   * @alias n
   */
  isGit: _propTypes['default'].bool,
};
TplReact.defaultProps = {
  flags: '测试',
  isGit: false,
  count: 1,
};
var _default = TplReact;
exports['default'] = _default;
