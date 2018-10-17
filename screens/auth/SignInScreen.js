import React from 'react';
import { AsyncStorage, StyleSheet, View, Button, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import I18n from '../../i18n';
import authService from '../../services/AuthService';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in'
  };

  state = {
    email: '',
    password: ''
  };

  _signInAsync = async () => {
    const signinData = {
      email: this.state.email,
      password: this.state.password
    };
    // const response = await authService.login(signinData);
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };

  _goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <View style={styles.container}>
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

        <Button title="Sign in!" onPress={this._signInAsync} />
        <Button title="Sign up!" onPress={this._goToSignUp} />
      </View>
    );
  }
}

SignInScreen.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
