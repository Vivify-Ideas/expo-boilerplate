import * as Yup from 'yup';
import I18n from '../i18n';

export const signInValidationRules = Yup.object().shape({
  email: Yup.string()
    .required()
    .email(),
  password: Yup.string()
    .required()
    .min(8)
});

export const signUpValidationRules = Yup.object().shape({
  email: Yup.string()
    .required()
    .email(),
  password: Yup.string()
    .required()
    .min(8),
  confirm_password: Yup.string()
    .required()
    .min(8)
    .oneOf([Yup.ref('password'), null], I18n.t('auth.passwordsMustMatch'))
});
