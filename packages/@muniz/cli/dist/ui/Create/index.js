'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _ink = require('ink');

var _reactRouter = require('react-router');

var _Create = _interopRequireDefault(require('./Create'));

var _Help = _interopRequireDefault(require('../Help'));

var Create = function Create(context) {
  var program = context.program,
    help = context.help,
    isInternalCommand = context.isInternalCommand;
  var input = program.input,
    flags = program.flags;
  var DynamicCommandUI = null;
  var command = input.length > 0 ? input.join('/') : 'help';

  if (flags === null || flags === void 0 ? void 0 : flags.help) {
    command = 'help';
  } else if (!isInternalCommand) {
    DynamicCommandUI = require('@muniz/muniz-plugin-'.concat(command.split('/')[0]))['default'][
      input.length > 1 ? input[1] : 'default'
    ];
  }

  return /*#__PURE__*/ _react['default'].createElement(
    _reactRouter.StaticRouter,
    {
      location: {
        pathname: command,
        state: flags,
      },
      context: context,
    },
    /*#__PURE__*/ _react['default'].createElement(
      _reactRouter.Switch,
      null,
      /*#__PURE__*/ _react['default'].createElement(
        _reactRouter.Route,
        {
          exact: true,
          path: 'help',
        },
        /*#__PURE__*/ _react['default'].createElement(_Help['default'], {
          data: help,
        }),
      ),
      /*#__PURE__*/ _react['default'].createElement(_reactRouter.Route, {
        path: 'add',
        component: _Create['default'],
      }),
      /*#__PURE__*/ _react['default'].createElement(
        _reactRouter.Route,
        {
          path: command,
        },
        DynamicCommandUI && /*#__PURE__*/ _react['default'].createElement(DynamicCommandUI, null),
      ),
    ),
  );
};

Create.propTypes = {
  input: _propTypes['default'].array,
  flags: _propTypes['default'].object,
};
Create.defaultProps = {
  input: [],
  flags: null,
};
var _default = Create;
exports['default'] = _default;
