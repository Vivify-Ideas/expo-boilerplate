import { combineReducers } from 'redux';

import activeUserReducer from './ActiveUserReducer';
import loaderReducer from './LoaderReducer';
import errorReducer from './ErrorReducer';
import userReducer from './UserReducer';

export default combineReducers({
  activeUserReducer,
  loaderReducer,
  errorReducer,
  userReducer
});
