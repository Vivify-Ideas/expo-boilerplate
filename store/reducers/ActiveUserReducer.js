import {
  SET_ACTIVE_USER,
  USER_LOGOUT,
  USER_SET,
  PASSWORD_CHANGE_SUCCESS,
  USER_UPDATE_SET
} from '../actions/ActionTypes';

const initialState = {
  userToken: {},
  user: {},
  passwordChanged: false
};

export default (state = initialState, action) => {
  /*eslint-disable indent */
  switch (action.type) {
    case SET_ACTIVE_USER:
      return {
        ...state,
        userToken: action.payload
      };
    case USER_LOGOUT:
      return initialState;
    case USER_SET:
      return { ...state, user: action.payload };
    case USER_UPDATE_SET:
      return { ...state, user: { ...state.user, ...action.payload } };
    case PASSWORD_CHANGE_SUCCESS:
      return { ...state, passwordChanged: action.payload };
    default:
      return state;
  }
};
