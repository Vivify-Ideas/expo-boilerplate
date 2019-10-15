import * as Yup from 'yup';
import $t from 'i18n';

export const signInValidationRules = Yup.object().shape({
  email: Yup.string()
    .required($t('validation.emailIsRequired'))
    .email($t('validation.mustBeValidEmail')),
  password: Yup.string()
    .required($t('validation.passwordIsRequired'))
    .min(8, $t('validation.passwordMinCharacters'))
});

export const signUpValidationRules = Yup.object().shape({
  first_name: Yup.string().required($t('validation.firstNameIsRequired')),
  last_name: Yup.string().required($t('validation.lastNameIsRequired')),
  email: Yup.string()
    .required($t('validation.emailIsRequired'))
    .email($t('validation.mustBeValidEmail')),
  password: Yup.string()
    .required($t('validation.passwordIsRequired'))
    .min(8, $t('validation.passwordMinCharacters')),
  confirm_password: Yup.string()
    .required($t('validation.confirmPasswordIsRequired'))
    .min(8, $t('validation.confirmPasswordMinCharacters'))
    .oneOf([Yup.ref('password'), null], $t('auth.passwordsMustMatch'))
});

export const forgotPasswordValidationRules = Yup.object().shape({
  email: Yup.string()
    .required($t('validation.emailIsRequired'))
    .email($t('validation.mustBeValidEmail'))
});

export const resetPasswordValidationRules = Yup.object().shape({
  password: Yup.string()
    .required($t('validation.passwordIsRequired'))
    .min(8, $t('validation.passwordMinCharacters')),
  password_confirmation: Yup.string()
    .required($t('validation.confirmPasswordIsRequired'))
    .min(8, $t('validation.confirmPasswordMinCharacters'))
    .oneOf([Yup.ref('password'), null], $t('auth.passwordsMustMatch'))
});
