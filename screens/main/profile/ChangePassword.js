import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ChangePasswordForm } from '../../../components/profile/ChangePasswordForm';
import { changePassword } from '../../../store/auth';
import { changePasswordErrorSelector } from '../../../store/error';

const ChangePassword = () => {
  const dispatch = useDispatch();

  const handleChangePassword = useCallback(data =>
    dispatch(changePassword(data))
  );

  const invalidOldPasswordError = useSelector(changePasswordErrorSelector());

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid>
        <ChangePasswordForm
          onSubmit={handleChangePassword}
          invalidOldPasswordError={invalidOldPasswordError}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
