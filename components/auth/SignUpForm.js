import React from 'react';
import { Button, View } from 'react-native';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import { TextInputField } from '../shared/FormFields';
import { signUpValidationRules } from '../../validation /auth';
import $t from 'i18n';
import ErrorText from '../shared/Text/ErrorText';

export const SignUpForm = props => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={values => props.onSubmit(values)}
    validationSchema={signUpValidationRules}
  >
    {({ handleSubmit }) => (
      <View>
        <Field
          name="first_name"
          component={TextInputField}
          placeholder={$t('auth.enterFirstName')}
        />
        <Field name="last_name" component={TextInputField} placeholder={$t('auth.enterLastName')} />
        <Field name="email" component={TextInputField} placeholder={$t('auth.enterEmail')} />
        <ErrorText error={!!props.signUpErrors.email} message={props.signUpErrors.email} />
        <Field
          name="password"
          component={TextInputField}
          secureTextEntry
          placeholder={$t('auth.enterPassword')}
        />
        <Field
          name="confirm_password"
          component={TextInputField}
          secureTextEntry
          placeholder={$t('auth.confirmPassword')}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
  signUpErrors: PropTypes.object
};
