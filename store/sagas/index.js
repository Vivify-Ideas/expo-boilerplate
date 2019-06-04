import { all, takeLatest } from 'redux-saga/effects';
import {
  USER_LOGIN,
  USER_SIGN_UP,
  USER_LOGOUT,
  USER_GOOGLE_LOGIN,
  USER_FACEBOOK_LOGIN,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  USER_GET
} from '../actions/ActionTypes';
import {
  userLogin,
  userSignUp,
  userLogout,
  userFacebookLogin,
  userGoogleLogin,
  forgotPassword,
  resetPassword,
  userGet
} from '../sagas/ActiveUserSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(USER_LOGIN, userLogin),
    takeLatest(USER_SIGN_UP, userSignUp),
    takeLatest(USER_LOGOUT, userLogout),
    takeLatest(USER_FACEBOOK_LOGIN, userFacebookLogin),
    takeLatest(USER_GOOGLE_LOGIN, userGoogleLogin),
    takeLatest(FORGOT_PASSWORD, forgotPassword),
    takeLatest(RESET_PASSWORD, resetPassword),
    takeLatest(USER_GET, userGet)
  ]);
}
