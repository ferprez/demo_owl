import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  IS_FETCHING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  NOMBRE_CHANGED,
  APELLIDO_CHANGED
} from "../util/actionTypes";

import { makeLogin, registro } from '../util/services';
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

export const nombreChanged = text => {
  return {
    type: NOMBRE_CHANGED,
    payload: text
  }
};

export const apellidoChanged = text => {
  return {
    type: APELLIDO_CHANGED,
    payload: text
  }
};

export const redirectRegistro = () => {
  return (dispatch) => {
    dispatch(push("/registro"));
  }
};

export const doRegistro = ({ nombre, apellido, email, password}) => {
  return (dispatch) => {
    let firstName = nombre;
    let lastName = apellido;
    registro({ firstName, lastName, email, password})
      .then(res => res.json())
      .then((json) => {
        if(json.success === true) {
          dispatch(push('/'));
          // this.doLogin({email, password})
        } else {
          dispatch(showToast("No se pudo loguear. Intente de nuevo"));
        }
      })
      .catch((err) => {
        dispatch(showToast(err.message));
      });
  }
}

export const doLogin = ({ email, password}) => {
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
      });
  };
};

export const tokenExpired = () => {
  return (dispatch) => {
    dispatch(replace('/'));
  };
};