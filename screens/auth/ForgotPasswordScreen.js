import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ForgotPasswordForm } from '../../components/auth/ForgotPasswordForm';
import { passwordForgot } from '../../store/actions/UserActions';
import { setForgotPasswordError } from '../../store/actions/ErrorActions';
import { forgotPasswordErrorSelector } from '../../store/selectors/ErrorSelector';

class ForgotPasswordScreen extends Component {
  static navigationOptions = {
    title: 'Forgot Password'
  };

  static propTypes = {
    navigation: PropTypes.object,
    passwordForgot: PropTypes.func,
    forgotPasswordError: PropTypes.bool,
    setForgotPasswordError: PropTypes.func
  };

  componentWillUnmount() {
    this.props.setForgotPasswordError(false);
  }

  handleSubmit = forgotPasswordData => {
    this.props.passwordForgot(forgotPasswordData);
  };

  render() {
    const { forgotPasswordError } = this.props;

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid>
          <ForgotPasswordForm
            onSubmit={this.handleSubmit}
            forgotPasswordError={forgotPasswordError}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    forgotPasswordError: forgotPasswordErrorSelector(state)
  };
};

const mapDispatchToProps = { passwordForgot, setForgotPasswordError };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
