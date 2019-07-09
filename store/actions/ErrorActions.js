import {
  GLOBAL_ERROR_SET,
  SIGNIN_ERROR_SET,
  SIGNUP_ERRORS_SET,
  PASSWORD_CHANGE_ERROR,
  RESET_PASSWORD_ERROR_SET,
  FORGOT_PASSWORD_ERROR_SET,
  SOCIAL_LOGIN_ERROR_SET
} from './ActionTypes';

export const setGlobalError = payload => {
  return {
    type: GLOBAL_ERROR_SET,
    payload
  };
};

export const setSignInError = payload => {
  return {
    type: SIGNIN_ERROR_SET,
    payload
  };
};

export const setSignUpErrors = payload => {
  return {
    type: SIGNUP_ERRORS_SET,
    payload
  };
};

export const setResetPasswordError = payload => {
  return {
    type: RESET_PASSWORD_ERROR_SET,
    payload
  };
};

export const setForgotPasswordError = payload => {
  return {
    type: FORGOT_PASSWORD_ERROR_SET,
    payload
  };
};

export const changePasswordError = payload => {
  return {
    type: PASSWORD_CHANGE_ERROR,
    payload
  };
};

export const setSocialLoginError = payload => {
  return {
    type: SOCIAL_LOGIN_ERROR_SET,
    payload
  };
};
