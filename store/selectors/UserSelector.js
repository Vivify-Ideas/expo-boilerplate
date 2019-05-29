import { createSelector } from 'reselect';

const userStateSelector = state => state.user.user;

export const userSelector = createSelector(userStateSelector, loader => loader);
