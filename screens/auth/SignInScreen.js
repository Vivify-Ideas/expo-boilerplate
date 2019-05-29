import React from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import I18n from '../../i18n';
import ActivityIndicatorComponent from '../../components/shared/ActivityIndicatorComponent';
import { textInputStyle } from '../../constants/Form';
import { login, facebookLogin, googleLogin } from '../../store/actions/UserActions';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in'
  };

  static propTypes = {
    navigation: PropTypes.object,
    login: PropTypes.func,
    facebookLogin: PropTypes.func,
    googleLogin: PropTypes.func
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
    this.props.login(signinData);
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
          <Button title="Sign in with Facebook!" onPress={this.props.facebookLogin} />
          <Button title="Sign in with Google!" onPress={this.props.googleLogin} />
          <Button title="Sign up!" onPress={this.goToSignUp} />
          <Button title="Forgot password" onPress={this.goToForgotPassword} />
        </KeyboardAwareScrollView>
        {this.state.loader && <ActivityIndicatorComponent animating={this.state.loader} />}
      </View>
    );
  }
}

const mapDispatchToProps = {
  login,
  facebookLogin,
  googleLogin
};

export default connect(
  null,
  mapDispatchToProps
)(SignInScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  textInputStyle
});
