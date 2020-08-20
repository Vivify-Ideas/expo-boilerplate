import { SET_LOADER } from '../actionTypes/LoaderActionTypes';

export default (state = false, action) => {
  /*eslint-disable indent */
  switch (action.type) {
    case SET_LOADER:
      return action.payload;
    default:
      return state;
  }
};
