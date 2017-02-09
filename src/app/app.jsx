// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import Root from './components/root';
import configureStore from './redux/store';

import createHistory from 'history/createBrowserHistory'
// import { useQueries } from 'history';
import InitialState from './redux/store/initialState';

const history = createHistory();
const Store = configureStore(InitialState(), history);

ReactDOM.render(
  <Root store={ Store } history={ history }/>
, document.getElementById('app'))
