import React from 'react';
import { AsyncStorage, StyleSheet, Button, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';

import I18n from '../../i18n';
import authService from '../../services/AuthService';
import ActivityIndicatorComponent from '../../components/shared/ActivityIndicatorComponent';
import { textInputStyle } from '../../constants/Form';

import { login } from '../../store/actions/userActions';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in'
  };

  static propTypes = {
    navigation: PropTypes.object,
    onLogin: PropTypes.func
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
      await AsyncStorage.setItem('userToken', this.state.email);
      this.props.onLogin({ email: this.state.email });
      this.props.navigation.navigate('MainStack');
    } catch (error) {
      this.setState({ loader: false });
      Alert.alert('Error', error.message);
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
            style={styles.textInputStyle}
          />

          <TextInput
            secureTextEntry={true}
            placeholder={I18n.t('auth.enterPass')}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            style={styles.textInputStyle}
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
  },
  textInputStyle
});

const mapDispatchToProps = dispatch => ({
  onLogin: user => {
    dispatch(login(user));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SignInScreen);
