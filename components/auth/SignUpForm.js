import React from 'react';
import { Button, View } from 'react-native';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import { TextInputField } from '../shared/FormFields';
import { signUpValidationRules } from '../../validation /auth';
import I18n from '../../i18n';

export const SignUpForm = props => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={values => props.onSubmit(values)}
    validationSchema={signUpValidationRules}
  >
    {props => (
      <View>
        <Field
          name="first_name"
          component={TextInputField}
          placeholder={I18n.t('auth.enterFirstName')}
        />
        <Field
          name="last_name"
          component={TextInputField}
          placeholder={I18n.t('auth.enterLastName')}
        />
        <Field name="email" component={TextInputField} placeholder={I18n.t('auth.enterEmail')} />
        <Field
          name="password"
          component={TextInputField}
          secureTextEntry
          placeholder={I18n.t('auth.enterPassword')}
        />
        <Field
          name="confirm_password"
          component={TextInputField}
          secureTextEntry
          placeholder={I18n.t('auth.confirmPassword')}
        />
        <Button onPress={props.handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func
};
