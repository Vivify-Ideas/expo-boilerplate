import {
  GLOBAL_ERROR_SET,
  SIGNIN_ERROR_SET,
  SIGNUP_ERRORS_SET,
  PASSWORD_CHANGE_ERROR,
  RESET_PASSWORD_ERROR_SET,
  FORGOT_PASSWORD_ERROR_SET,
  SOCIAL_LOGIN_ERROR_SET
} from '../actionTypes/ErrorActionTypes';

export const setGlobalError = payload => ({
  type: GLOBAL_ERROR_SET,
  payload
});

export const setSignInError = payload => ({
  type: SIGNIN_ERROR_SET,
  payload
});

export const setSignUpErrors = payload => ({
  type: SIGNUP_ERRORS_SET,
  payload
});

export const setResetPasswordError = payload => ({
  type: RESET_PASSWORD_ERROR_SET,
  payload
});

export const setForgotPasswordError = payload => ({
  type: FORGOT_PASSWORD_ERROR_SET,
  payload
});

export const changePasswordError = payload => ({
  type: PASSWORD_CHANGE_ERROR,
  payload
});

export const setSocialLoginError = payload => ({
  type: SOCIAL_LOGIN_ERROR_SET,
  payload
});
