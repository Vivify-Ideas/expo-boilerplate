import produce from 'immer';
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

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_ACTIVE_USER:
        draft.userToken = action.payload;
        break;
      case USER_LOGOUT:
        return initialState;
      case USER_SET:
        draft.user = action.payload;
        break;
      case USER_UPDATE_SET:
        draft.user = { ...draft.user, ...action.payload };
        break;
      case PASSWORD_CHANGE_SUCCESS:
        draft.passwordChanged = action.payload;
        break;
    }
  });
