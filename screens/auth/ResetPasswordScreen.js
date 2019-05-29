import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';

import authService from '../../services/AuthService';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ActivityIndicatorComponent from '../../components/shared/ActivityIndicatorComponent';

class ResetPasswordScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  state = {
    newPassword: '',
    confirmPassword: '',
    loader: false
  };

  sendResetPasswordEmail = async () => {
    this.setState({ loader: true });
    try {
      await authService.changePassword({
        password: this.state.newPassword,
        password_confirmation: this.state.confirmPassword,
        forgot_password_token: this.props.navigation.getParam('forgot_password_token')
      });
      Alert.alert($t('common.success'), $t('auth.passwordSuccessfullyChanged'));
      this.props.navigation.navigate('SignIn');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
    this.setState({ loader: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid>
          <TextInput
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder={$t('auth.enterNewPass')}
            onChangeText={newPassword => this.setState({ newPassword })}
            value={this.state.newPassword}
          />
          <TextInput
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder={$t('auth.confirmPass')}
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
          />
          <Button title={$t('auth.changePass')} onPress={this.sendResetPasswordEmail} />
        </KeyboardAwareScrollView>
        {this.state.loader && <ActivityIndicatorComponent animating={this.state.loader} />}
      </View>
    );
  }
}

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
