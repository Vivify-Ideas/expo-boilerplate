import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combineReducers from './reducers';

export const store = createStore(combineReducers, applyMiddleware(thunk));
