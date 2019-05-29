import {
  USER_LOGIN,
  USER_SIGN_UP,
  USER_LOGOUT,
  SET_ACTIVE_USER,
  USER_FACEBOOK_LOGIN,
  USER_GOOGLE_LOGIN,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_ERROR_SET,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR_SET
} from './ActionTypes';

export const logout = () => {
  return {
    type: USER_LOGOUT
  };
};

export const login = user => {
  return {
    type: USER_LOGIN,
    payload: user
  };
};

export const signUp = user => {
  return {
    type: USER_SIGN_UP,
    payload: user
  };
};

export const setActiveUser = payload => {
  return {
    type: SET_ACTIVE_USER,
    payload
  };
};

export const facebookLogin = () => {
  return {
    type: USER_FACEBOOK_LOGIN
  };
};

export const googleLogin = () => {
  return {
    type: USER_GOOGLE_LOGIN
  };
};

export const passwordForgot = payload => {
  return {
    type: FORGOT_PASSWORD,
    payload
  };
};

export const setForgotPasswordError = payload => {
  return {
    type: FORGOT_PASSWORD_ERROR_SET,
    payload
  };
};

export const passwordReset = payload => {
  return {
    type: RESET_PASSWORD,
    payload
  };
};

export const setResetPasswordError = payload => {
  return {
    type: RESET_PASSWORD_ERROR_SET,
    payload
  };
};
