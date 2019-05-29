import { combineReducers } from 'redux';

import userReducer from './UserReducer';
import loaderReducer from './LoaderReducer';
import ErrorReducer from './ErrorReducer';

export default combineReducers({
  user: userReducer,
  loader: loaderReducer,
  errors: ErrorReducer
});
