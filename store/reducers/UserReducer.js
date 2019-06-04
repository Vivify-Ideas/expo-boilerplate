import { SET_ACTIVE_USER, USER_LOGOUT, USER_SET } from '../actions/ActionTypes';

const initialState = {
  userToken: {},
  user: {}
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
    default:
      return state;
  }
};
