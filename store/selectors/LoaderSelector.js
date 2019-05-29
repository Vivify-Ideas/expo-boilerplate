import { createSelector } from 'reselect';

const loaderStateSelector = state => state.features.loader;

export const loaderSelector = createSelector(loaderStateSelector, loader => loader);
