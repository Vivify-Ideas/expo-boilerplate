import produce from 'immer';
import {
  SET_GLOBAL_ERROR,
  SET_SIGNIN_ERROR,
  SET_SIGNUP_ERRORS,
  SET_PASSWORD_CHANGE_ERROR,
  SET_RESET_PASSWORD_ERROR,
  SET_FORGOT_PASSWORD_ERROR,
  SET_SOCIAL_LOGIN_ERROR
} from './actionTypes';

const initialState = {
  globalError: false,
  signInError: false,
  forgotPasswordError: false,
  resetPasswordError: false,
  signUpErrors: {},
  changePasswordError: false,
  socialLoginError: ''
};

function reducer(state = initialState, { type, payload }) {
  return produce(state, draft => {
    /*eslint-disable indent */
    switch (type) {
      case SET_GLOBAL_ERROR:
        draft.globalError = payload;
        break;
      case SET_SIGNIN_ERROR:
        draft.signInError = payload;
        break;
      case SET_SIGNUP_ERRORS:
        draft.signUpErrors = payload;
        break;
      case SET_FORGOT_PASSWORD_ERROR:
        draft.forgotPasswordError = payload;
        break;
      case SET_RESET_PASSWORD_ERROR:
        draft.resetPasswordError = payload;
        break;
      case SET_PASSWORD_CHANGE_ERROR:
        draft.changePasswordError = payload;
        break;
      case SET_SOCIAL_LOGIN_ERROR:
        draft.socialLoginError = payload;
        break;
    }
  });
}

export default reducer;
