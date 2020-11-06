import PropTypes from 'prop-types';
import i18n from '../../configs/i18n';

/**
 * @muniz
 * @type function
 * @description help_tpl_function_desc
 */
const TplFunction = () => {
  console.log(i18n.getLocale('tpl_function_command_info'));
};

TplFunction.propTypes = {
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
   * @description 生成项目的名称
   * @alias n
   */
  isGit: PropTypes.bool,
};

TplFunction.defaultProps = {
  inputa: 'ssss',
  flags: '测试',
  isGit: false,
};

export default TplFunction;
