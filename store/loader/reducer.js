import { SET_LOADER } from './actionTypes';

const initialState = false;

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_LOADER:
      return payload;
    default:
      return state;
  }
}

export default reducer;
