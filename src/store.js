import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import apiMiddleware from './middlewares/api';

import rootReducer from './reducers/rootReducer';

const initialState = {};

let middleware = [apiMiddleware];

if (process.env.NODE_ENV === 'development') {
	middleware = [...middleware, logger];
} else {
	middleware = [...middleware];
}

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;