import { handleActions } from 'redux-actions';

import * as AT from '../constants/action-types';

const initialState = {
  error: '',
  beerList: {}
};

const beers = handleActions({
  [AT.FETCH_BEERS.SUCCESS]: (state, action) => ({
    ...state,
    error: '',  
    beerList: action.payload
  }),

  [AT.FETCH_BEERS.FAILURE]: (state, action) => ({
    ...state,
    error: action.payload,
    beerList: {}
  })

}, initialState);

export default beers;