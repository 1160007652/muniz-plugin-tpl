import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '@muniz/ink-ui';
import { Box, Text, useApp, useFocusManager } from 'ink';

/**
 * @muniz
 * @description help_tpl_desc
 **/
const Tpl = () => {
  return (
    <Box flexDirection="column">
      <Text color="green">Step-1: 收集用户输入信息</Text>
      <TextInput placeHolder="测试" />
    </Box>
  );
};

Tpl.propTypes = {
  /**
   * @muniz
   * @description help_tpl_flags_desc
   */
  flags: PropTypes.string,

  count: PropTypes.number,
  /**
   * @muniz
   * @description 生成项目的名称
   * @alias n
   */
  isGit: PropTypes.bool,
};

Tpl.defaultProps = {
  flags: 'wowowoowqqqqqqq',
  isGit: false,
  count: 1,
};

export default Tpl;
