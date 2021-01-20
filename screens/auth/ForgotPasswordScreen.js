import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ForgotPasswordForm } from '../../components/auth/ForgotPasswordForm';
import { forgotPassword } from '../../store/auth';
import {
  setForgotPasswordError,
  forgotPasswordErrorSelector
} from '../../store/error';

const ForgotPasswordScreen = () => {
  const dispatch = useDispatch();

  const handlePasswordForgot = useCallback(({ email }) =>
    dispatch(forgotPassword(email))
  );
  const handleSetForgotPasswordError = data =>
    dispatch(setForgotPasswordError(data));

  const forgotPasswordError = useSelector(forgotPasswordErrorSelector());

  useEffect(() => {
    return () => handleSetForgotPasswordError(false);
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid>
        <ForgotPasswordForm
          onSubmit={handlePasswordForgot}
          forgotPasswordError={forgotPasswordError}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

ForgotPasswordScreen.navigationOptions = {
  title: 'Forgot Password'
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
