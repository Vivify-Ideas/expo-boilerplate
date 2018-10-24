import { combineReducers } from 'redux';

import userReducer from './UserReducer';
import loaderReducer from './LoaderReducer';

export default combineReducers({
  user: userReducer,
  loader: loaderReducer
});
