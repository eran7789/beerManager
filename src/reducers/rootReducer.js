import { combineReducers } from 'redux';

import authReducer from './auth';
import addReducer from './add';
import beersReducer from './beers';
import adminReducer from './admin';

const rootReducer = combineReducers({
  auth: authReducer,
  add: addReducer,
  beers: beersReducer,
  admin: adminReducer
});

export default rootReducer;
