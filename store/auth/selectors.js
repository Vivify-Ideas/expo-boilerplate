import { createSelector } from 'reselect';

const userStateSelector = state => state.activeUser;

export const activeUserSelector = () =>
  createSelector(userStateSelector, state => state.user);

export const passwordChangedSelector = () =>
  createSelector(userStateSelector, state => state.passwordChanged);
