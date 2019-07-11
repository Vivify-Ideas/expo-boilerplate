import { createSelector } from 'reselect';

const activeUserStateSelector = state => state.activeUserReducer;

export const userTokenSelector = createSelector(activeUserStateSelector, user => user.userToken);
export const userSelector = createSelector(activeUserStateSelector, user => user.user);
export const passwordChangedSelector = createSelector(
  activeUserStateSelector,
  user => user.passwordChanged
);
