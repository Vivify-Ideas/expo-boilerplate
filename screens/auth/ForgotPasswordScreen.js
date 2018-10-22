import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import I18n from '../../i18n';
import authService from '../../services/AuthService';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ActivityIndicatorComponent from '../../components/shared/ActivityIndicatorComponent';
import { textInputStyle } from '../../constants/Form';

class ForgotPasswordScreen extends Component {
  static navigationOptions = {
    title: 'Forgot Password'
  };

  state = {
    email: '',
    loader: false
  };

  sendResetPasswordEmail = async () => {
    this.setState({ loader: true });
    try {
      await authService.resetPassword(this.state.email);

      Alert.alert(
        I18n.t('common.success'),
        'The mail has been sent successfully. Check your inbox.'
      );
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
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder={I18n.t('auth.enterEmail')}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            style={styles.textInputStyle}
          />
          <Button title={I18n.t('common.send')} onPress={this.sendResetPasswordEmail} />
        </KeyboardAwareScrollView>
        {this.state.loader && <ActivityIndicatorComponent animating={this.state.loader} />}
      </View>
    );
  }
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textInputStyle
});
