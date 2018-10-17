import React, { Component } from 'react';
import { TextInput, StyleSheet, Button, Alert } from 'react-native';
import I18n from '../../i18n';
import authService from '../../services/AuthService';
import Sentry from 'sentry-expo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';

class ResetPasswordScreen extends Component {
  state = {
    newPassword: '',
    confirmPassword: ''
  };

  sendResetPasswordEmail = async () => {
    const dataToSend = {
      password: this.state.newPassword,
      password_confirmation: this.state.confirmPassword,
      forgot_password_token: this.props.navigation.getParam('forgot_password_token')
    };
    try {
      await authService.changePassword(dataToSend);
      Alert.alert(I18n.t('common.success'), I18n.t('auth.passwordSuccessfullyChanged'));
      this.props.navigation.navigate('SignIn');
    } catch (e) {
      Sentry.captureException(e);
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView enableOnAndroid style={styles.container}>
        <TextInput
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={I18n.t('auth.enterNewPass')}
          onChangeText={newPassword => this.setState({ newPassword })}
          value={this.state.newPassword}
        />
        <TextInput
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={I18n.t('auth.confirmPass')}
          onChangeText={confirmPassword => this.setState({ confirmPassword })}
          value={this.state.confirmPassword}
        />
        <Button title={I18n.t('auth.changePass')} onPress={this.sendResetPasswordEmail} />
      </KeyboardAwareScrollView>
    );
  }
}

export default ResetPasswordScreen;

ResetPasswordScreen.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
