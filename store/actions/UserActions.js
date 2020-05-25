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
} from '../actionTypes/UserActionTypes';

export const logout = () => ({
  type: USER_LOGOUT
});

export const login = user => ({
  type: USER_LOGIN,
  payload: user
});

export const signUp = user => ({
  type: USER_SIGN_UP,
  payload: user
});

export const setActiveUser = payload => ({
  type: SET_ACTIVE_USER,
  payload
});

export const facebookLogin = () => ({
  type: USER_FACEBOOK_LOGIN
});

export const googleLogin = () => ({
  type: USER_GOOGLE_LOGIN
});

export const passwordForgot = payload => ({
  type: FORGOT_PASSWORD,
  payload
});

export const passwordReset = payload => ({
  type: RESET_PASSWORD,
  payload
});

export const getUser = () => ({
  type: USER_GET
});

export const setUser = payload => ({
  type: USER_SET,
  payload
});

export const changePassword = payload => ({
  type: PASSWORD_CHANGE,
  payload
});

export const setChangePasswordSuccess = payload => ({
  type: PASSWORD_CHANGE_SUCCESS,
  payload
});

export const updateUser = payload => ({
  type: USER_UPDATE,
  payload
});

export const setUpdatedUser = payload => ({
  type: USER_UPDATE_SET,
  payload
});
