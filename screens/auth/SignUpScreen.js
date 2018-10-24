import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import I18n from '../../i18n';
import { connect } from 'react-redux';
import { textInputStyle } from '../../constants/Form';
import { signUp } from '../../store/actions/UserActions';

class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign up'
  };

  static propTypes = {
    navigation: PropTypes.object,
    signUp: PropTypes.func
  };

  state = {
    name: '',
    email: '',
    password: '',
    loader: false
  };

  confirmSignUp = () => {
    Alert.alert('Confirm', 'Are you sure that you want to singup with this data?', [
      { text: 'Cancel', onPress: () => {}, style: 'cancel' },
      { text: 'Yes', onPress: () => this.signUp() }
    ]);
  };

  signUp = async () => {
    const signupData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.signUp(signupData);
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid>
          <TextInput
            autoCapitalize="words"
            autoCorrect={false}
            placeholder={I18n.t('auth.enterName')}
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
            style={styles.textInputStyle}
          />

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

          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text>{I18n.t('auth.haveAccountLogIn')}</Text>
            </TouchableOpacity>
            <Button title={I18n.t('auth.signup')} onPress={this.confirmSignUp} />
          </View>
        </KeyboardAwareScrollView>
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
  signUp: user => dispatch(signUp(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpScreen);
