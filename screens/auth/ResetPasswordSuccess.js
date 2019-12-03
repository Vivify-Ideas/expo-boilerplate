import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ResetPasswordSuccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid>
        <Text>{$t('auth.passwordResetSucces')}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text>{$t('common.ok')}</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

ResetPasswordSuccess.propTypes = {
  navigation: PropTypes.object
};

ResetPasswordSuccess.navigationOptions = null;

export default ResetPasswordSuccess;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
