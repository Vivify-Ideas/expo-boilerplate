import React, { useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import NavigationService from '../services/NavigationService';
import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking';
import * as Permissions from 'expo-permissions';
import PropTypes from 'prop-types';
import { withInAppNotification } from 'react-native-in-app-notification';
import { useSelector, useDispatch } from 'react-redux';

import authService from '../services/AuthService';
import ActivityIndicatorComponent from '../components/shared/ActivityIndicatorComponent';
import { loaderSelector } from '../store/loader';
import PasswordChangedModal from '../components/shared/modal/PasswordChangeModal';
import { passwordChangedSelector, setChangePasswordSuccess } from '../store/auth';
import ErrorModal from '../components/shared/modal/ErrorModal';
import {
  setGlobalError,
  globalErrorSelector,
  setSocialLoginError,
  socialLoginErrorSelector
} from '../store/error';
import {
  OS_TYPES,
  DEFAULT,
  NOTIFICATION,
  NOTIFICATION_ORIGIN
} from '../constants';
import { notificationHandleService } from '../services/NotificationHandleService';
import SocialLoginErrorModal from '../components/shared/modal/SocialLoginErrorModal';
import OfflineWarning from '../components/shared/OfflineWarning';

const NetworkInterceptor = ({ showNotification, children }) => {
  const dispatch = useDispatch();

  const handleSetGlobalError = data => dispatch(setGlobalError(data));
  const handleSetSocialLoginError = data => dispatch(setSocialLoginError(data));
  const handleSetChangePasswordSuccess = data =>
    dispatch(setChangePasswordSuccess(data));

  const loader = useSelector(loaderSelector());
  const passwordChanged = useSelector(passwordChangedSelector());
  const globalError = useSelector(globalErrorSelector());
  const socialLoginError = useSelector(socialLoginErrorSelector());

  useEffect(() => {
    addNotificationListener();
  }, []);

  const addNotificationListener = async () => {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
    setUrlEventListener();

    if (Platform.OS === OS_TYPES.ANDROID) {
      Notifications.createChannelAndroidAsync(DEFAULT, {
        name: NOTIFICATION,
        sound: true
      });
    }
    Notifications.addNotificationReceivedListener(handleNotification);
  };

  const handleNotification = notification => {
    if (notification.origin === NOTIFICATION_ORIGIN.SELECTED) {
      notificationHandleService.handleOnClick(notification);
    } else {
      notificationHandleService.showInApp(
        notification,
        notification.notificationId,
        showNotification
      );
    }
  };

  const setUrlEventListener = () => {
    //If app is in background
    Linking.addEventListener('url', event => {
      let { queryParams } = Linking.parse(event.url);
      processUrlEvent(queryParams);
    });

    //If app is not open
    Linking.getInitialURL().then(url => {
      let { queryParams } = Linking.parse(url);
      processUrlEvent(queryParams);
    });
  };

  const processUrlEvent = async queryParams => {
    const accessToken = await authService.getAccessToken();
    if (queryParams.forgot_password_token) {
      NavigationService.navigate('ResetPassword', {
        forgot_password_token: queryParams.forgot_password_token
      });
      return;
    }

    if (!accessToken) {
      NavigationService.navigate('AuthStack');
      return;
    }

    if (queryParams.notifications) {
      NavigationService.navigate('NotificationsScreen');
      return;
    }
  };

  return (
    <View style={styles.container}>
      <OfflineWarning />
      {children}
      {loader && <ActivityIndicatorComponent animating />}
      <PasswordChangedModal
        isVisible={passwordChanged}
        closeModal={() => handleSetChangePasswordSuccess(false)}
      />
      <ErrorModal
        isVisible={globalError}
        closeModal={() => handleSetGlobalError(false)}
      />
      <SocialLoginErrorModal
        error={socialLoginError}
        closeModal={() => handleSetSocialLoginError('')}
      />
    </View>
  );
};

NetworkInterceptor.propTypes = {
  children: PropTypes.any,
  showNotification: PropTypes.func
};

export default withInAppNotification(NetworkInterceptor);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
