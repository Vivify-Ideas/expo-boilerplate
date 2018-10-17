import React, { Component } from 'react';
import { TextInput, StyleSheet, Button, Alert } from 'react-native';
import I18n from '../../i18n';
import authService from '../../services/AuthService';
import Sentry from 'sentry-expo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class ForgotPasswordScreen extends Component {
  state = {
    email: ''
  };

  sendResetPasswordEmail = async () => {
    try {
      await authService.resetPassword(this.state.email);
      Alert.alert(
        I18n.t('common.success'),
        'The mail has been sent successfully. Check your inbox.'
      );
    } catch (e) {
      Sentry.captureException(e);
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView enableOnAndroid style={styles.container}>
        <TextInput
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={I18n.t('auth.enterEmail')}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Button title={I18n.t('common.send')} onPress={this.sendResetPasswordEmail} />
      </KeyboardAwareScrollView>
    );
  }
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
