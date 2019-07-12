import { CHAT_CREATE } from './ActionTypes';

export const createChat = payload => ({
  type: CHAT_CREATE,
  payload
});
