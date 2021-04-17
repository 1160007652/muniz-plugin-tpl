import PropTypes from 'prop-types';
import i18n from '../../configs/i18n';
const wasm = require('@muniz/helloworld');
/**
 * @muniz
 * @type function
 * @description help_tpl_wasm_desc
 */
const TplWasm = async () => {
  console.log(i18n.getLocale('help_tpl_wasm_info'), '\n');

  // wasm 方法
  console.log(`wasm.welcome() -> ${wasm.welcome()}`);
  console.log(`wasm.add(520, 520) -> ${wasm.add(520, 520)}`);
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
