import PropTypes from 'prop-types';
import i18n from '../../configs/i18n';
const wasm = require('../../../wasm/tpl_wasm.js');

/**
 * @muniz
 * @type function
 * @description help_tpl_wasm_desc
 */
const TplWasm = async () => {
  console.log(i18n.getLocale('help_tpl_wasm_info'));
};

TplWasm.propTypes = {
  /**
   * @muniz
   * @description help_tpl_react_flags_desc
   * @alias i
   */
  inputa: PropTypes.string.isRequired,
  /**
   * @muniz
   * @positionsArgs 1
   */
  flags: PropTypes.string,
  /**
   * @muniz
   * @description help_tpl_react_git_desc
   * @alias n
   */
  isGit: PropTypes.bool,
};

TplWasm.defaultProps = {
  inputa: 'ssss',
  flags: '测试',
  isGit: false,
};

export default TplWasm;
