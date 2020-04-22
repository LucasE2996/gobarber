import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Routes />
    </>
  );
};

export default App;
