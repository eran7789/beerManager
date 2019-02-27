import * as AT from '../constants/action-types';

export const nameChanged = (name) => ({
  type: AT.ADD_NAME_CHANGED,
  payload: name
});

export const breweryChanged = (brewery) => ({
  type: AT.ADD_BREWERY_CHANGED,
  payload: brewery
});

export const typeChanged = (type) => ({
  type: AT.ADD_TYPE_CHANGED,
  payload: type
});

export const pictureChanged = (picture) => ({
  type: AT.ADD_PICTURE_CHANGED,
  payload: picture
});

export const addBeer = ({ name, type = 'IPA', brewery, picture, user }) => ({
  type: AT.API_REQUEST,
  payload: { name, type, brewery, picture, user, actionType: AT.ADD_BEER }
});