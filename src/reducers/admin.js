import { handleActions } from 'redux-actions';
import { set } from 'lodash/fp';

import * as AT from '../constants/action-types';

const now = new Date();

const initialState = {
  invitation : null,
  invitationForm: {
    date: {
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear()
    },
    period: {
      hours: 0,
      minutes: 0,
      days: 0
    }
  }
};

const admin = handleActions({
  [AT.DATE_CHANGED]: (state, action) => 
    set('invitationForm.date', action.payload, state),

  [AT.PERIOD_CHANGED]: (state, action) =>
    set('invitationForm.period', action.payload, state)

}, initialState);

export default admin;