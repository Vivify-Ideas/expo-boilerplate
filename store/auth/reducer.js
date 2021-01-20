import produce from 'immer';
import {
  CHANGE_PASSWORD_SUCCESS,
  SET_ACTIVE_USER,
  SET_UPDATED_USER
} from './actionTypes';

const initialState = {
  user: {},
  passwordChanged: false
};

function reducer(state = initialState, { type, payload }) {
  return produce(state, draft => {
    /*eslint-disable indent */
    switch (type) {
      case SET_ACTIVE_USER:
        draft.user = payload;
        break;
      case SET_UPDATED_USER:
        draft.user = { ...draft.user, ...payload };
        break;
      case CHANGE_PASSWORD_SUCCESS:
        draft.passwordChanged = payload;
        break;
    }
  });
}

export default reducer;
