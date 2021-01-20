import { createSelector } from 'reselect';

const loaderStateSelector = state => state.loader;

export const loaderSelector = () =>
  createSelector(loaderStateSelector, state => state);
