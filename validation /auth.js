import * as Yup from 'yup';
import $t from '../i18n';

export const signInValidationRules = Yup.object().shape({
  email: Yup.string()
    .required()
    .email(),
  password: Yup.string()
    .required()
    .min(8)
});

export const signUpValidationRules = Yup.object().shape({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  email: Yup.string()
    .required()
    .email(),
  password: Yup.string()
    .required()
    .min(8),
  confirm_password: Yup.string()
    .required()
    .min(8)
    .oneOf([Yup.ref('password'), null], $t('auth.passwordsMustMatch'))
});
