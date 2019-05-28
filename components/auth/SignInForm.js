import React from 'react';
import { Button, View } from 'react-native';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import { TextInputField } from '../shared/FormFields';
import { signInValidationRules } from '../../validation /auth';
import I18n from '../../i18n';

export const SignInForm = props => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={values => props.onSubmit(values)}
    validationSchema={signInValidationRules}
  >
    {props => (
      <View>
        <Field name="email" component={TextInputField} placeholder={I18n.t('auth.enterEmail')} />
        <Field
          name="password"
          component={TextInputField}
          secureTextEntry
          placeholder={I18n.t('auth.enterPassword')}
        />
        <Button onPress={props.handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func
};
