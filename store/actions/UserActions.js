import { USER_LOGIN, USER_SIGN_UP, USER_LOGOUT, SET_ACTIVE_USER } from './ActionTypes';

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
