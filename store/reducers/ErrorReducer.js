import produce from 'immer';
import {
  GLOBAL_ERROR_SET,
  SIGNIN_ERROR_SET,
  SIGNUP_ERRORS_SET,
  FORGOT_PASSWORD_ERROR_SET,
  RESET_PASSWORD_ERROR_SET,
  PASSWORD_CHANGE_ERROR,
  SOCIAL_LOGIN_ERROR_SET
} from '../actionTypes/ErrorActionTypes';

const initialState = {
  globalError: false,
  signInError: false,
  forgotPasswordError: false,
  resetPasswordError: false,
  signUpErrors: {},
  changePasswordError: false,
  socialLoginError: ''
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case GLOBAL_ERROR_SET:
        draft.globalError = action.payload;
        break;
      case SIGNIN_ERROR_SET:
        draft.signInError = action.payload;
        break;
      case SIGNUP_ERRORS_SET:
        draft.signUpErrors = action.payload;
        break;
      case FORGOT_PASSWORD_ERROR_SET:
        draft.forgotPasswordError = action.payload;
        break;
      case RESET_PASSWORD_ERROR_SET:
        draft.resetPasswordError = action.payload;
        break;
      case PASSWORD_CHANGE_ERROR:
        draft.changePasswordError = action.payload;
        break;
      case SOCIAL_LOGIN_ERROR_SET:
        draft.socialLoginError = action.payload;
        break;
    }
  });
