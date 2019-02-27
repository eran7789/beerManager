import { Navigation } from 'react-native-navigation';

import * as AT from '../constants/action-types';

export const loginUser = ({ email, password, success }) => ({
  type: AT.API_REQUEST,
  payload: {
    email, password, actionType: AT.LOGIN_USER
  },
  success
});

export const emailChanged = (email) => ({
  type: AT.EMAIL_CHANGED,
  payload: email
});

export const passwordChanged = (password) => ({
  type: AT.PASSWORD_CHANGED,
  payload: password
});


export const authenticateUser = ({ success, failure }) => ({
  type: AT.API_REQUEST,
  payload: {
    actionType: AT.AUTHENTICATE_USER
  },
  success,
  failure
});