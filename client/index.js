import React from 'react';
import ReactDOM from 'react-dom';
import store from 'store';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from 'routes';

// import App from 'containers/App';

import 'index.html';

const history = syncHistoryWithStore(browserHistory, store)

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router routes={routes} history={history} />
    </Provider>,
    document.getElementById('root')
  );
};

renderApp();
