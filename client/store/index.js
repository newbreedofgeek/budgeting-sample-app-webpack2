import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('reducers', () => {
    const nextRootReducer = require('reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
