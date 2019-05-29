import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import { TextInputField } from '../shared/FormFields';
import { signInValidationRules } from '../../validation /auth';
import $t from 'i18n';
import ErrorText from '../shared/Text/ErrorText';

export const SignInForm = props => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={values => props.onSubmit(values)}
    validationSchema={signInValidationRules}
  >
    {({ handleSubmit }) => (
      <View>
        <Field name="email" component={TextInputField} placeholder={$t('auth.enterEmail')} />
        <Field
          name="password"
          component={TextInputField}
          secureTextEntry
          placeholder={$t('auth.enterPassword')}
        />
        <ErrorText error={!!props.signInError} message={$t('auth.invalidCredentials')} />
        <TouchableOpacity onPress={handleSubmit}>
          <Text>{$t('auth.signIn')}</Text>
        </TouchableOpacity>
      </View>
    )}
  </Formik>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
  signInError: PropTypes.bool
};
