import { call, put } from 'redux-saga/effects';

import { userService } from '../../services/UserService';
import { setUserSearch } from '../actions/UserActions';
import { setLoader } from '../actions/LoaderAction';
import { setGlobalError } from '../actions/ErrorActions';

export function* userSearchGet({ payload }) {
  try {
    yield put(setLoader(true));
    const { data } = yield call(userService.searchUsers, payload);
    yield put(setUserSearch(data));
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}
