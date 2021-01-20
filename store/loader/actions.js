import { SET_LOADER } from './actionTypes';

export function setLoader(loader) {
  return {
    type: SET_LOADER,
    payload: loader
  };
}
