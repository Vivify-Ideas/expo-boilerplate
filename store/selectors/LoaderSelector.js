import { createSelector } from 'reselect';

const loaderStateSelector = state => state.loaderReducer;

export const loaderSelector = () => createSelector(loaderStateSelector, loader => loader);
