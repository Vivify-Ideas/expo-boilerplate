import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import { TextInputField } from '../shared/FormFields';
import { resetPasswordValidationRules } from '../../validation/auth';
import $t from 'i18n';
import ErrorText from '../shared/Text/ErrorText';

export const ResetPasswordForm = ({ onSubmit, resetPasswordError }) => (
  <Formik
    initialValues={{ password: '', password_confirmation: '' }}
    onSubmit={onSubmit}
    validationSchema={resetPasswordValidationRules}
  >
    {({ handleSubmit }) => (
      <View>
        <Field
          name="password"
          component={TextInputField}
          secureTextEntry
          placeholder={$t('auth.enterPassword')}
        />
        <Field
          name="password_confirmation"
          component={TextInputField}
          secureTextEntry
          placeholder={$t('auth.confirmPassword')}
        />
        <ErrorText error={!!resetPasswordError} message={$t('auth.invalidToken')} />
        <TouchableOpacity onPress={handleSubmit}>
          <Text>{$t('auth.resetPassword')}</Text>
        </TouchableOpacity>
      </View>
    )}
  </Formik>
);

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  resetPasswordError: PropTypes.bool
};
