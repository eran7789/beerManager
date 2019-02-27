const createAsyncAction = (type) => ({
  BASE: type,
  SUCCESS: `${type}_SUCCESS`,
  FAILURE: `${type}_FAILURE`,
  PENDING: `${type}_PENDING`
});


export const API_REQUEST = 'API_REQUEST';

// auth
export const LOGIN_USER = createAsyncAction('LOGIN_USER');
export const AUTHENTICATE_USER = createAsyncAction('AUTHENTICATE_USER');
export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';

// add
export const ADD_BEER = createAsyncAction('ADD_BEER');
export const ADD_NAME_CHANGED = 'ADD_NAME_CHANGED';
export const ADD_BREWERY_CHANGED = 'ADD_BREWERY_CHANGED';
export const ADD_TYPE_CHANGED = 'ADD_TYPE_CHANGED';
export const ADD_PICTURE_CHANGED = 'ADD_PICTURE_CHANGED';

// beers
export const FETCH_BEERS = createAsyncAction('FETCH_BEERS');

// admin
export const DATE_CHANGED = 'DATE_CHANGED';
export const PERIOD_CHANGED = 'PERIOD_CHANGED';
export const SEND_INVITES = createAsyncAction('SEND_INVITES');

