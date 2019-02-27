import * as AT from '../constants/action-types';

export const fetchBeers = ({ success, failure }) => ({
  type: AT.API_REQUEST,
  payload: {
    actionType: AT.FETCH_BEERS
  },
  success,
  failure
});