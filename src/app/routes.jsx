import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Wrapper from './components/shared/wrapper.jsx';

import NoMatch from './components/shared/noMatch.jsx';
import Main from './components/main.jsx';

export default (
  <Route path="/" component={Wrapper}>
    <IndexRoute component={Main} />
    <Route path="*" component={NoMatch}/>
  </Route>
)
