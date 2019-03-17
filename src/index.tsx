import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
// import { apiMiddleware } from './middleware';
import App from './components/App';
import rootReducer from './reducers';

// const sagaMiddleware = createSagaMiddleware();
// let middleware = composeWithDevTools(applyMiddleware(sagaMiddleware, logger));
// process.env.NODE_ENV !== 'production'
//   ? (middleware = composeWithDevTools(applyMiddleware(sagaMiddleware, logger)))
//   : (middleware = applyMiddleware(sagaMiddleware));

// const store = createStore(rootReducer, middleware);
const store = createStore(rootReducer);

// sagaMiddleware.run(apiMiddleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
