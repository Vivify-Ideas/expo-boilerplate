import { createSelector } from 'reselect';

const globalErrorStateSelector = state => state.errors.globalError;
const signInErrorStateSelector = state => state.errors.signInError;
const forgotPasswordErrorStateSelector = state => state.errors.forgotPasswordError;
const resetPasswordErrorStateSelector = state => state.errors.resetPasswordError;
const signUpErrorsStateSelector = state => state.errors.signUpErrors;

export const globalErrorSelector = createSelector(globalErrorStateSelector, loader => loader);
export const signInErrorSelector = createSelector(signInErrorStateSelector, loader => loader);
export const forgotPasswordErrorSelector = createSelector(
  forgotPasswordErrorStateSelector,
  loader => loader
);
export const resetPasswordErrorSelector = createSelector(
  resetPasswordErrorStateSelector,
  loader => loader
);
export const signUpErrorsSelector = createSelector(signUpErrorsStateSelector, loader => loader);
