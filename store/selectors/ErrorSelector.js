import { createSelector } from 'reselect';

const errorStateSelector = state => state.errorReducer;

export const globalErrorSelector = () =>
  createSelector(errorStateSelector, error => error.globalError);
export const signInErrorSelector = () =>
  createSelector(errorStateSelector, error => error.signInError);
export const forgotPasswordErrorSelector = () =>
  createSelector(errorStateSelector, error => error.forgotPasswordError);
export const resetPasswordErrorSelector = () =>
  createSelector(errorStateSelector, error => error.resetPasswordError);
export const signUpErrorsSelector = () =>
  createSelector(errorStateSelector, error => error.signUpErrors);
export const socialLoginErrorSelector = () =>
  createSelector(errorStateSelector, error => error.socialLoginError);
export const changePasswordErrorSelector = () =>
  createSelector(errorStateSelector, error => error.changePasswordError);
