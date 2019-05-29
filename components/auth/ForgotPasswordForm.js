import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import $t from 'i18n';

import { TextInputField } from '../shared/FormFields';
import { forgotPasswordValidationRules } from '../../validation /auth';
import ErrorText from '../shared/Text/ErrorText';

export const ForgotPasswordForm = props => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={values => props.onSubmit(values)}
    validationSchema={forgotPasswordValidationRules}
  >
    {({ handleSubmit }) => (
      <View>
        <Field name="email" component={TextInputField} placeholder={$t('auth.enterEmail')} />
        <ErrorText error={!!props.forgotPasswordError} message={$t('auth.emailDoesNotExist')} />
        <TouchableOpacity onPress={handleSubmit}>
          <Text>{$t('auth.sendEmail')}</Text>
        </TouchableOpacity>
      </View>
    )}
  </Formik>
);

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  forgotPasswordError: PropTypes.bool
};
