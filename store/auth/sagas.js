import { call, put, takeLatest } from 'redux-saga/effects';

import authService from '../../services/AuthService';
import NavigationService from '../../services/NavigationService';
import { profileService } from '../../services/ProfileService';
import {
  setForgotPasswordError,
  setGlobalError,
  setResetPasswordError,
  setSignInError,
  setSignUpErrors,
  setSocialLoginError
} from '../error';
import { setLoader } from '../loader';
import { resetState } from '../shared';
import {
  setChangePasswordSuccess,
  setUpdatedUser,
  setActiveUser
} from './actions';

import {
  CHANGE_PASSWORD,
  FACEBOOK_LOGIN,
  FORGOT_PASSWORD,
  GET_ACTIVE_USER,
  GOOGLE_LOGIN,
  LOGIN,
  LOGOUT,
  RESET_PASSWORD,
  SIGN_UP,
  UPDATE_USER
} from './actionTypes';

function* login({ payload }) {
  try {
    yield put(setSignInError(false));
    yield put(setLoader(true));

    yield call(authService.login, payload);
    NavigationService.navigate('AuthLoading');
  } catch (error) {
    if (error.response.status === 401) {
      yield put(setSignInError(true));
    } else {
      yield put(setGlobalError(true));
    }
  } finally {
    yield put(setLoader(false));
  }
}

function* loginWithFacebook() {
  try {
    yield put(setLoader(true));
    yield call(authService.loginWithFacebook);
    NavigationService.navigate('AuthLoading');
  } catch (error) {
    if (error.message !== 'cancel') {
      if (error.response.status === 422) {
        yield put(setSocialLoginError(error.response.data.error));
      } else {
        yield put(setGlobalError(true));
      }
    }
  } finally {
    yield put(setLoader(false));
  }
}

function* loginWithGoogle() {
  try {
    yield put(setLoader(true));
    yield call(authService.loginWithGoogle);
    NavigationService.navigate('AuthLoading');
  } catch (error) {
    if (error.message !== 'cancel') {
      if (error.response.status === 422) {
        yield put(setSocialLoginError(error.response.data.error));
      } else {
        yield put(setGlobalError(true));
      }
    }
  } finally {
    yield put(setLoader(false));
  }
}

function* signUp({ payload }) {
  try {
    yield put(setSignUpErrors({}));
    yield put(setLoader(true));
    yield call(authService.signup, payload);
    NavigationService.navigate('AuthLoading');
  } catch (error) {
    if (error.response.status === 422) {
      yield put(setSignUpErrors(error.response.data.errors));
    } else {
      yield put(setGlobalError(true));
    }
  } finally {
    yield put(setLoader(false));
  }
}

function* logout() {
  try {
    yield put(setLoader(true));
    yield call(authService.logout);
    yield put(resetState());
    NavigationService.navigate('AuthLoading');
  } catch (error) {
  } finally {
    yield put(setLoader(false));
  }
}

function* forgotPassword({ payload }) {
  try {
    yield put(setForgotPasswordError(false));
    yield put(setLoader(true));
    yield call(authService.forgotPassword, payload);
    NavigationService.navigate('ForgotPasswordSuccess');
  } catch (error) {
    if (error.response.status === 422) {
      yield put(setForgotPasswordError(true));
    } else {
      yield put(setGlobalError(true));
    }
  } finally {
    yield put(setLoader(false));
  }
}

function* resetPassword({ payload }) {
  try {
    yield put(setLoader(true));
    yield call(authService.resetPassword, payload);
    NavigationService.navigate('ResetPasswordSuccess');
  } catch (error) {
    if (error.response.status === 422) {
      yield put(setResetPasswordError(true));
    } else {
      yield put(setGlobalError(true));
    }
  } finally {
    yield put(setLoader(false));
  }
}

function* getActiveUser() {
  try {
    yield put(setLoader(true));
    const { data } = yield call(profileService.getProfile);
    yield put(setActiveUser(data));
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}

function* changePassword({ payload }) {
  try {
    yield put(setLoader(true));
    yield call(profileService.changePassword, payload);
    yield put(setChangePasswordSuccess(true));
    NavigationService.goBack();
  } catch (error) {
    if (error.response.status === 422) {
      yield put(setChangePasswordError(true));
    } else {
      yield put(setGlobalError(true));
    }
  } finally {
    yield put(setLoader(false));
  }
}

function* updateUser({ payload }) {
  try {
    yield put(setLoader(true));
    const { data } = yield call(profileService.updateUser, payload);
    yield put(setUpdatedUser(data));
    NavigationService.goBack();
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, login);
}

export function* watchLoginWithFacebook() {
  yield takeLatest(FACEBOOK_LOGIN, loginWithFacebook);
}

export function* watchLoginWithGoogle() {
  yield takeLatest(GOOGLE_LOGIN, loginWithGoogle);
}

export function* watchSignUp() {
  yield takeLatest(SIGN_UP, signUp);
}

export function* watchLogout() {
  yield takeLatest(LOGOUT, logout);
}

export function* watchForgotPassword() {
  yield takeLatest(FORGOT_PASSWORD, forgotPassword);
}

export function* watchResetPassword() {
  yield takeLatest(RESET_PASSWORD, resetPassword);
}

export function* watchGetActiveUser() {
  yield takeLatest(GET_ACTIVE_USER, getActiveUser);
}

export function* watchChangePassword() {
  yield takeLatest(CHANGE_PASSWORD, changePassword);
}

export function* watchUpdateUser() {
  yield takeLatest(UPDATE_USER, updateUser);
}
