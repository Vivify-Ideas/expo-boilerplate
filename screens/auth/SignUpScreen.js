import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import $t from 'i18n';

import { connect } from 'react-redux';
import { signUp } from '../../store/actions/UserActions';
import { setSignUpErrors } from '../../store/actions/ErrorActions';
import { SignUpForm } from '../../components/auth/SignUpForm';
import { signUpErrorsSelector } from '../../store/selectors/ErrorSelector';

class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: $t('auth.signUp')
  };

  static propTypes = {
    navigation: PropTypes.object,
    signUp: PropTypes.func,
    signUpErrors: PropTypes.object,
    setSignUpErrors: PropTypes.func
  };

  componentWillUnmount() {
    this.props.setSignUpErrors({});
  }

  signUp = signupData => {
    this.props.signUp(signupData);
  };

  render() {
    const { signUpErrors } = this.props;

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid>
          <SignUpForm onSubmit={this.signUp} signUpErrors={signUpErrors} />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
    signUpErrors: signUpErrorsSelector(state)
  };
};

const mapDispatchToProps = {
  signUp,
  setSignUpErrors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen);
