import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { connect } from 'react-redux';
import { signUp } from '../../store/actions/UserActions';
import { SignUpForm } from '../../components/auth/SignUpForm';

class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign up'
  };

  static propTypes = {
    navigation: PropTypes.object,
    signUp: PropTypes.func
  };

  signUp = signupData => {
    this.props.signUp(signupData);
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid>
          <SignUpForm onSubmit={this.signUp} />
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

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpScreen);
