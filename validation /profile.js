import * as Yup from 'yup';
import $t from 'i18n';

export const changePasswordValidationRules = Yup.object().shape({
  current_password: Yup.string()
    .required()
    .min(8),
  new_password: Yup.string()
    .required()
    .min(8),
  new_password_confirmation: Yup.string()
    .required()
    .min(8)
    .oneOf([Yup.ref('new_password'), null], $t('auth.passwordsMustMatch'))
});
