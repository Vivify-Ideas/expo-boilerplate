import {
  SET_GLOBAL_ERROR,
  SET_SIGNIN_ERROR,
  SET_SIGNUP_ERRORS,
  SET_PASSWORD_CHANGE_ERROR,
  SET_RESET_PASSWORD_ERROR,
  SET_FORGOT_PASSWORD_ERROR,
  SET_SOCIAL_LOGIN_ERROR
} from './actionTypes';

export function setGlobalError(error) {
  return {
    type: SET_GLOBAL_ERROR,
    payload: error
  };
}

export function setSignInError(error) {
  return {
    type: SET_SIGNIN_ERROR,
    payload: error
  };
}

export function setSignUpErrors(error) {
  return {
    type: SET_SIGNUP_ERRORS,
    payload: error
  };
}

export function setResetPasswordError(error) {
  return {
    type: SET_RESET_PASSWORD_ERROR,
    payload: error
  };
}

export function setForgotPasswordError(error) {
  return {
    type: SET_FORGOT_PASSWORD_ERROR,
    payload: error
  };
}

export function setChangePasswordError(error) {
  return {
    type: SET_PASSWORD_CHANGE_ERROR,
    payload: error
  };
}

export function setSocialLoginError(error) {
  return {
    type: SET_SOCIAL_LOGIN_ERROR,
    payload: error
  };
}
