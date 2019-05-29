import { call, put } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import authService from '../../services/AuthService';
import NavigationService from '../../services/NavigationService';
import { setSignInError, setGlobalError, setSignUpErrors } from '../actions/ErrorActions';

export function* userLogin({ payload }) {
  try {
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

export function* userFacebookLogin() {
  try {
    yield put(setLoader(true));
    yield call(authService.loginWithFacebook);
    NavigationService.navigate('AuthLoading');
  } catch (error) {
    console.log(error); /*eslint-disable-line*/
  } finally {
    yield put(setLoader(false));
  }
}

export function* userGoogleLogin() {
  try {
    yield put(setLoader(true));
    yield call(authService.loginWithGoogle);
    NavigationService.navigate('AuthLoading');
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  } finally {
    yield put(setLoader(false));
  }
}

export function* userSignUp({ payload }) {
  try {
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

export function* userLogout() {
  try {
    yield put(setLoader(true));
    yield call(authService.logout);
    NavigationService.navigate('AuthLoading');
  } catch (error) {
    console.log(error); /*eslint-disable-line*/
  } finally {
    yield put(setLoader(false));
  }
}
