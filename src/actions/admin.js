import * as AT from '../constants/action-types';

export const dateChanged = ({ day, year, month }) => ({
  type: AT.DATE_CHANGED,
  payload: { day, year, month }
});

export const periodChanged = ({ days, hours, minutes }) => ({
  type: AT.PERIOD_CHANGED,
  payload: { days, hours, minutes }
});

export const sendInvites = ({ date, period }) => ({
  type: AT.API_REQUEST,
  meta: {
    url: 'notifyBeerRequest',
    method: 'POST',
    body: {
      date,
      payload
    }
  },
  payload: {
    actionType: AT.SEND_INVITES,
    date, 
    period
  }
})