import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class ForgotPasswordSuccess extends Component {
  static navigationOptions = null;

  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid>
          <Text>{$t('auth.forgotPasswordSuccess')}</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
            <Text>{$t('common.ok')}</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default ForgotPasswordSuccess;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
