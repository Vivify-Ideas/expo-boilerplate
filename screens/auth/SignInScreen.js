import React from 'react';
import { AsyncStorage, StyleSheet, Button, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import I18n from '../../i18n';
import authService from '../../services/AuthService';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Sentry from 'sentry-expo';
import ActivityIndicatorComponent from '../../components/shared/ActivityIndicatorComponent';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in'
  };

  static propTypes = {
    navigation: PropTypes.object
  };

  state = {
    email: '',
    password: '',
    loader: false
  };

  signIn = async () => {
    const signinData = {
      email: this.state.email,
      password: this.state.password
    };
    this.setState({ loader: true });
    try {
      await authService.login(signinData);
      await AsyncStorage.setItem('userToken', 'abc');
      this.setState({ loader: false });
      this.props.navigation.navigate('Main');
    } catch (e) {
      Sentry.captureException(e);
    }
  };

  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  goToForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
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
          />

          <TextInput
            secureTextEntry={true}
            placeholder={I18n.t('auth.enterPass')}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />

          <Button title="Sign in!" onPress={this.signIn} />
          <Button title="Sign up!" onPress={this.goToSignUp} />
          <Button title="Forgot password" onPress={this.goToForgotPassword} />
        </KeyboardAwareScrollView>
        {this.state.loader && <ActivityIndicatorComponent animating={this.state.loader} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
