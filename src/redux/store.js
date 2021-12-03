import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

// The ...midlewares syntax is useful if we have multiple middleware
// With our single middleware logger, we could also write: applyMiddleware(logger)
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;