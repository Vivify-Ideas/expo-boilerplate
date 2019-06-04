import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { passwordReset } from '../../store/actions/UserActions';
import { ResetPasswordForm } from '../../components/auth/ResetPasswordForm';
import { resetPasswordErrorSelector } from '../../store/selectors/ErrorSelector';

class ResetPasswordScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    passwordReset: PropTypes.func,
    resetPasswordError: PropTypes.bool
  };

  handleSubmit = resetPasswordData => {
    this.props.passwordReset({
      ...resetPasswordData,
      token: this.props.navigation.getParam('forgot_password_token')
    });
  };

  render() {
    const { resetPasswordError } = this.props;

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid>
          <ResetPasswordForm onSubmit={this.handleSubmit} resetPasswordError={resetPasswordError} />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    resetPasswordError: resetPasswordErrorSelector(state)
  };
};

const mapDispatchToProps = { passwordReset };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
