import { USER_SEARCH_SET } from '../actions/ActionTypes';

const initialState = {
  users: []
};

export default (state = initialState, action) => {
  /*eslint-disable indent */
  switch (action.type) {
    case USER_SEARCH_SET:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
