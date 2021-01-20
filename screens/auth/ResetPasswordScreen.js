import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ResetPasswordForm } from '../../components/auth/ResetPasswordForm';
import { resetPassword } from '../../store/auth';
import { resetPasswordErrorSelector } from '../../store/error';

const ResetPasswordScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handlePasswordReset = data => dispatch(resetPassword(data));
  const resetPasswordError = useSelector(resetPasswordErrorSelector());

  const handleSubmit = resetPasswordData => {
    handlePasswordReset({
      ...resetPasswordData,
      token: navigation.getParam('forgot_password_token')
    });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid>
        <ResetPasswordForm
          onSubmit={handleSubmit}
          resetPasswordError={resetPasswordError}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

ResetPasswordScreen.propTypes = {
  navigation: PropTypes.object
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
