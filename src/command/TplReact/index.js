import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spinner, Table } from '@muniz/ink-ui';
import { Box, Text } from 'ink';
import i18n from '../../configs/i18n';

/**
 * @muniz
 * @type react
 * @description help_tpl_react_desc
 **/
const TplReact = () => {
  const [count, setCount] = useState(0);
  const [tableList, setTablList] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((state) => (state > 8 ? 0 : state + 1));
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const _tempData = tableList.map((item, index) => {
      if (index === 1) {
        item[1] = count;
      }
      return item;
    });
    setTablList(_tempData);
  }, [count]);

  return (
    <Fragment>
      <Box flexDirection="column" marginBottom="1" marginTop="1">
        <Text>{i18n.getLocale('tpl_react_command_state')}</Text>
        <Text>{i18n.getLocale('tpl_react_command_timer', { count })}</Text>
      </Box>

      <Box flexDirection="column" marginBottom="1">
        <Text>{`@muniz/ink-ui 「 Table ${i18n.getLocale('component')} 」`}</Text>
        <Table data={tableList} />
      </Box>

      <Box flexDirection="column" marginBottom="1">
        <Text>{`@muniz/ink-ui 「 Spinner  ${i18n.getLocale('component')} 」`}</Text>
        <Spinner>
          <Text>{i18n.getLocale('tpl_react_command_loding')}</Text>
        </Spinner>
      </Box>
    </Fragment>
  );
};

TplReact.propTypes = {
  /**
   * @muniz
   * @description help_tpl_react_flags_desc
   */
  flags: PropTypes.string,
  /**
   * @muniz
   * @description help_tpl_react_git_desc
   * @alias n
   */
  isGit: PropTypes.bool,
};

TplReact.defaultProps = {
  flags: '测试',
  isGit: false,
};

export default TplReact;
