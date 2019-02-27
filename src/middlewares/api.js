import { includes } from 'lodash/fp';

import controller from '../firebase-controller';

import { API_REQUEST } from '../constants/action-types';
import { FIREBASE_ACTIONS } from '../constants/firebase';

const apiMiddleware = store => next => action => {
  if (action.type !== API_REQUEST) {
    return next(action);
  }

  const { dispatch } = store;

  dispatch({ type: action.payload.actionType.PENDING });

  const handleSuccess = (payload) => {
    dispatch({ type: action.payload.actionType.SUCCESS, payload });
    if (action.success) {
      action.success();
    }
  }

  const handleFailure = (error) => {
    dispatch({ type: action.payload.actionType.FAILURE, payload: error.message || error });
    if (action.failure) {
      action.failure();
    }
  }

  if (includes(action.payload.actionType, FIREBASE_ACTIONS)) {
    controller[action.payload.actionType.BASE]({ 
      ...action.payload
    })
      .then(handleSuccess)
      .catch(handleFailure)
  } else {
    fetch(`${BASE_URL}${action.meta.url}`, action.meta)
      .then(handleSuccess)
      .catch(handleFailure)
  }
}

export default apiMiddleware;