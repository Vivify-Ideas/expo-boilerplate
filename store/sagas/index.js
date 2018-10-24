import { all, takeLatest } from 'redux-saga/effects';
import { USER_LOGIN, USER_SIGN_UP, USER_LOGOUT } from '../actions/ActionTypes';
import { userLogin, userSignUp, userLogout } from '../sagas/ActiveUserSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(USER_LOGIN, userLogin),
    takeLatest(USER_SIGN_UP, userSignUp),
    takeLatest(USER_LOGOUT, userLogout)
  ]);
}
