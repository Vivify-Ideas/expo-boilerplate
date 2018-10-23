import { USER_LOGIN, USER_LOGOUT } from '../constants/userTypes';

const initialState = {
  isLoggedIn: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return {
      isLoggedIn: true,
      user: action.payload
    };
  case USER_LOGOUT:
  default:
    return state;
  }
};
