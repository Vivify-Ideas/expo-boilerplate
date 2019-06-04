import {
  USER_LOGIN,
  USER_SIGN_UP,
  USER_LOGOUT,
  SET_ACTIVE_USER,
  USER_FACEBOOK_LOGIN,
  USER_GOOGLE_LOGIN,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  USER_GET,
  USER_SET,
  PASSWORD_CHANGE,
  PASSWORD_CHANGE_SUCCESS,
  USER_UPDATE,
  USER_UPDATE_SET
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

export const passwordReset = payload => {
  return {
    type: RESET_PASSWORD,
    payload
  };
};

export const getUser = () => {
  return {
    type: USER_GET
  };
};

export const setUser = payload => {
  return {
    type: USER_SET,
    payload
  };
};

export const changePassword = payload => {
  return {
    type: PASSWORD_CHANGE,
    payload
  };
};

export const setChangePasswordSuccess = payload => {
  return {
    type: PASSWORD_CHANGE_SUCCESS,
    payload
  };
};

export const updateUser = payload => {
  return {
    type: USER_UPDATE,
    payload
  };
};

export const setUpdatedUser = payload => {
  return {
    type: USER_UPDATE_SET,
    payload
  };
};
