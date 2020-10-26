import PropTypes from 'prop-types';
import { InkUI, React, Ink } from '@muniz/common';

const { TextInput } = InkUI;
const { useState } = React;
const { Box, Text, useApp, useFocusManager } = Ink;

// 插件模版 测试指令
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
   * @description falgs哈哈
   */
  flags: PropTypes.string,
  /**
   * @muniz
   * @description Number类型转换
   */
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
