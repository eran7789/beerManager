import { handleActions } from 'redux-actions';

import * as AT from '../constants/action-types';

const initialState = {
  email: '',
  password: '',
  isLoading: false,
  error: '',
  isAdmin: false
};

const auth = handleActions({
  [AT.LOGIN_USER.PENDING]: (state, action) => ({
    ...state,
    error: '',
    isLoading: true
  }),

  [AT.LOGIN_USER.SUCCESS]: (state, action) => ({
    ...state,
    email: action.payload.email,
    password: '',
    isAdmin: action.payload.isAdmin,
    isLoading: false
  }),

  [AT.LOGIN_USER.FAILURE]: (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload
  }),

  [AT.EMAIL_CHANGED]: (state, action) => ({
    ...state,
    email: action.payload
  }),

  [AT.PASSWORD_CHANGED]: (state, action) => ({
    ...state,
    password: action.payload
  })
}, initialState);

export default auth;