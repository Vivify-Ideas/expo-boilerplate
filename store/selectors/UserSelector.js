import { createSelector } from 'reselect';

const userStateSelector = state => state.userReducer;

export const usersSelector = createSelector(userStateSelector, user => user.users);
