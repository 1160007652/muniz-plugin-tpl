import React from 'react';
import { Text } from 'ink';
import { useLocation, useHistory, useParams, useRouteMatch } from 'react-router';

const Home = () => {
  let location = useLocation();
  let history = useHistory();
  let params = useParams();
  let match = useRouteMatch();
  console.log(location, params, match);

  return <Text>添加插件命令</Text>;
};

export default Home;