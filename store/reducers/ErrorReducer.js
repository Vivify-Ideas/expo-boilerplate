import { GLOBAL_ERROR_SET, SIGNIN_ERROR_SET, SIGNUP_ERRORS_SET } from '../actions/ActionTypes';

const initialState = {
  globalError: false,
  signInError: false,
  signUpErrors: {}
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
    default:
      return state;
  }
};
