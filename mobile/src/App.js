import React from 'react';
import {useSelector} from 'react-redux';

import Routes from './routes';

export default function src() {
  const isSingnedIn = useSelector(state => state.auth.signed);

  return <Routes isSingnedIn={isSingnedIn} />;
}
