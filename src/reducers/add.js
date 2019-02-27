import { handleActions } from 'redux-actions';

import * as AT from '../constants/action-types';

const initialState = {
  type: '',
  brewery: '',
  name: '',
  picture: '',
  error: '',
  isLoading: false
};

const auth = handleActions({
  [AT.ADD_NAME_CHANGED]: (state, action) => ({
    ...state,
    error: '',  
    name: action.payload
  }),

  [AT.ADD_TYPE_CHANGED]: (state, action) => ({
    ...state,
    error: '',  
    type: action.payload
  }),

  [AT.ADD_BREWERY_CHANGED]: (state, action) => ({
    ...state,
    error: '',  
    brewery: action.payload
  }),
  
  [AT.ADD_PICTURE_CHANGED]: (state, action) => ({
    ...state,
    error: '',  
    picture: action.payload
  }),

  [AT.ADD_BEER.PENDING]: (state) => ({
    ...state,
    isLoading: true
  }),
  
  [AT.ADD_BEER.SUCCESS]: () => initialState,

  [AT.ADD_BEER.FAILURE]: (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload
  })

}, initialState);

export default auth;