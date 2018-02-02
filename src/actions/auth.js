import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  IS_FETCHING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from "../util/actionTypes";

import { makeLogin } from '../util/services';
import { showToast } from './util';
import { push, replace } from "react-router-redux";

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

export const doLogin = ({ email, password}, renderSnackBar) => {
  return (dispatch) => {
    // Disparamos el evento de login
    dispatch({ type: IS_FETCHING });
    makeLogin({email, password })
      .then(res => res.json())
      .then(json => {
        if(json.success) {
          dispatch({ type: LOGIN_USER_SUCCESS, payload: json });
          dispatch(push('/home'));
        } else {
          dispatch(showToast(json.message));
          dispatch({ type: LOGIN_USER_FAIL });
        }
      })
      .catch(err => {
        dispatch(showToast(err.message));
        dispatch({ type: LOGIN_USER_FAIL });
        renderSnackBar();
      });
  };
};

export const tokenExpired = () => {
  return (dispatch) => {
    dispatch(replace('/'));
  };
};