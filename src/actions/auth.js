import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../util/actionTypes';

export const usernameChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
