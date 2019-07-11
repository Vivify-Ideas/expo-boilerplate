import {
  GLOBAL_ERROR_SET,
  SIGNIN_ERROR_SET,
  SIGNUP_ERRORS_SET,
  FORGOT_PASSWORD_ERROR_SET,
  RESET_PASSWORD_ERROR_SET,
  PASSWORD_CHANGE_ERROR,
  SOCIAL_LOGIN_ERROR_SET
} from '../actions/ActionTypes';

const initialState = {
  globalError: false,
  signInError: false,
  forgotPasswordError: false,
  resetPasswordError: false,
  signUpErrors: {},
  changePasswordError: false,
  socialLoginError: ''
};

export default (state = initialState, action) => {
  /*eslint-disable indent */
  switch (action.type) {
    case GLOBAL_ERROR_SET:
      return {
        ...state,
        globalError: action.payload
      };
    case SIGNIN_ERROR_SET:
      return {
        ...state,
        signInError: action.payload
      };
    case SIGNUP_ERRORS_SET:
      return {
        ...state,
        signUpErrors: action.payload
      };
    case FORGOT_PASSWORD_ERROR_SET:
      return {
        ...state,
        forgotPasswordError: action.payload
      };
    case RESET_PASSWORD_ERROR_SET:
      return {
        ...state,
        resetPasswordError: action.payload
      };
    case PASSWORD_CHANGE_ERROR:
      return {
        ...state,
        changePasswordError: action.payload
      };
    case SOCIAL_LOGIN_ERROR_SET:
      return {
        ...state,
        socialLoginError: action.payload
      };
    default:
      return state;
  }
};
