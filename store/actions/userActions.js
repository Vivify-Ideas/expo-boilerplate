import { USER_LOGIN, USER_LOGOUT } from '../constants/userTypes';

export const logout = () => dispatch =>
  dispatch({
    type: USER_LOGOUT
  });

export const login = user => dispatch => {
  dispatch({
    type: USER_LOGIN,
    payload: user
  });
};
