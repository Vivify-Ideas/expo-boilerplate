import { SET_ACTIVE_USER, USER_LOGOUT } from '../actions/ActionTypes';

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  /*eslint-disable indent */
  switch (action.type) {
    case SET_ACTIVE_USER:
      return {
        user: action.payload
      };
    case USER_LOGOUT:
      return { user: {} };
    default:
      return state;
  }
};
