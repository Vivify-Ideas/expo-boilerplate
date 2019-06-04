import { combineReducers } from 'redux';

import userReducer from './UserReducer';
import loaderReducer from './LoaderReducer';
import errorReducer from './ErrorReducer';

export default combineReducers({
  userReducer,
  loaderReducer,
  errorReducer
});
