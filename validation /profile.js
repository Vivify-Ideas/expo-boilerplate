import * as Yup from 'yup';
import $t from 'i18n';

export const changePasswordValidationRules = Yup.object().shape({
  current_password: Yup.string()
    .required($t('validation.currentPasswordIsRequired'))
    .min(8, $t('validation.currentPasswordMinCharacters')),
  new_password: Yup.string()
    .required($t('validation.newPasswordIsRequired'))
    .min(8, $t('validation.newPasswordMinCharacters')),
  new_password_confirmation: Yup.string()
    .required($t('validation.newPasswordConfirmationIsRequired'))
    .min(8, $t('validation.newPasswordConfirmationMinCharacters'))
    .oneOf([Yup.ref('new_password'), null], $t('auth.passwordsMustMatch'))
});

export const updateProfileValidationRules = Yup.object().shape({
  first_name: Yup.string().required($t('validation.firstNameIsRequired')),
  last_name: Yup.string().required($t('validation.lastNameIsRequired'))
});
