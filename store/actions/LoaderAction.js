import { SET_LOADER } from '../actions/ActionTypes';

export const setLoader = payload => {
  return {
    type: SET_LOADER,
    payload
  };
};
