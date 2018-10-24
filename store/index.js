import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
