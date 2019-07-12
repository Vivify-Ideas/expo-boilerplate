import { call, put } from 'redux-saga/effects';

import { setLoader } from '../actions/LoaderAction';
import { setGlobalError } from '../actions/ErrorActions';
import { chatService } from '../../services/ChatService';
import NavigationService from '../../services/NavigationService';

export function* handleChatCreate({ payload }) {
  try {
    yield put(setLoader(true));
    yield call(chatService.createChat, payload);

    NavigationService.navigate('Chat');
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}
