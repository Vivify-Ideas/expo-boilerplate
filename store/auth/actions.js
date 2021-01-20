import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  FACEBOOK_LOGIN,
  FORGOT_PASSWORD,
  GET_ACTIVE_USER,
  GOOGLE_LOGIN,
  LOGIN,
  LOGOUT,
  RESET_PASSWORD,
  SET_ACTIVE_USER,
  SET_UPDATED_USER,
  SIGN_UP,
  UPDATE_USER
} from './actionTypes';

export function login(credentials) {
  return {
    type: LOGIN,
    payload: credentials
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function signUp(user) {
  return {
    type: SIGN_UP,
    payload: user
  };
}

export function setActiveUser(activeUser) {
  return {
    type: SET_ACTIVE_USER,
    payload: activeUser
  };
}

export function loginWithFacebook() {
  return {
    type: FACEBOOK_LOGIN
  };
}

export function loginWithGoogle() {
  return {
    type: GOOGLE_LOGIN
  };
}

export function forgotPassword(email) {
  return {
    type: FORGOT_PASSWORD,
    payload: email
  };
}

export function resetPassword(payload) {
  return {
    type: RESET_PASSWORD,
    payload
  };
}

export function getActiveUser() {
  return {
    type: GET_ACTIVE_USER
  };
}

export const changePassword = payload => ({
  type: CHANGE_PASSWORD,
  payload
});

export const setChangePasswordSuccess = payload => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload
});

export const updateUser = user => ({
  type: UPDATE_USER,
  payload: user
});

export const setUpdatedUser = user => ({
  type: SET_UPDATED_USER,
  payload: user
});
