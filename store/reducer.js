import { combineReducers } from 'redux';

import { reducer as loaderReducer } from './loader';
import { reducer as errorReducer } from './error';
import { reducer as activeUserReducer } from './auth';

import { RESET_STATE } from './shared';

const reducer = combineReducers({
  loader: loaderReducer,
  error: errorReducer,
  activeUser: activeUserReducer
});

export default function(state, action) {
  if (action.type === RESET_STATE) {
    state = undefined;
  }
  return reducer(state, action);
}
