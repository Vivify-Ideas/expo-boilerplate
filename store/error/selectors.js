import { createSelector } from 'reselect';

const errorStateSelector = state => state.error;

export const globalErrorSelector = () =>
  createSelector(errorStateSelector, state => state.globalError);

export const signInErrorSelector = () =>
  createSelector(errorStateSelector, state => state.signInError);

export const forgotPasswordErrorSelector = () =>
  createSelector(errorStateSelector, state => state.forgotPasswordError);

export const resetPasswordErrorSelector = () =>
  createSelector(errorStateSelector, state => state.resetPasswordError);

export const signUpErrorsSelector = () =>
  createSelector(errorStateSelector, state => state.signUpErrors);

export const socialLoginErrorSelector = () =>
  createSelector(errorStateSelector, state => state.socialLoginError);

export const changePasswordErrorSelector = () =>
  createSelector(errorStateSelector, state => state.changePasswordError);
