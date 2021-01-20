import React, { useCallback } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import $t from 'i18n';

import { SignInForm } from '../../components/auth/SignInForm';
import { login, facebookLogin, googleLogin } from '../../store/auth';
import { signInErrorSelector } from '../../store/error';

const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogin = useCallback(data => dispatch(login(data)));
  const handleFacebookLogin = data => dispatch(facebookLogin(data));
  const handleGoogleLogin = data => dispatch(googleLogin(data));

  const signInError = useSelector(signInErrorSelector());

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid>
        <SignInForm onSubmit={handleLogin} signInError={signInError} />

        <Button title="Sign in with Facebook!" onPress={handleFacebookLogin} />
        <Button title="Sign in with Google!" onPress={handleGoogleLogin} />
        <Button title="Sign up!" onPress={goToSignUp} />
        <Button title="Forgot password" onPress={goToForgotPassword} />
      </KeyboardAwareScrollView>
    </View>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.object
};

SignInScreen.navigationOptions = {
  title: $t('auth.signIn')
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
