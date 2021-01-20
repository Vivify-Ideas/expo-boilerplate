import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import $t from 'i18n';
import { useDispatch, useSelector } from 'react-redux';

import { SignUpForm } from '../../components/auth/SignUpForm';
import { signUp } from '../../store/auth';
import { setSignUpErrors, signUpErrorsSelector } from '../../store/error';

const SignUpScreen = () => {
  const dispatch = useDispatch();

  const handleSignUp = useCallback(data => dispatch(signUp(data)));
  const handleSetSignUpErrors = data => dispatch(setSignUpErrors(data));

  const signUpErrors = useSelector(signUpErrorsSelector());

  useEffect(() => {
    return () => handleSetSignUpErrors({});
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid>
        <SignUpForm onSubmit={handleSignUp} signUpErrors={signUpErrors} />
      </KeyboardAwareScrollView>
    </View>
  );
};
SignUpScreen.navigationOptions = {
  title: $t('auth.signUp')
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
