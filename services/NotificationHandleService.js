import * as Notifications from 'expo-notifications';
import { AppState } from 'react-native';

import ApiService from './ApiService';
import { APP_STATE } from '../constants';

class NotificationHandleService extends ApiService {
  handleOnClick = notification => {
    console.log(notification); /*eslint-disable-line*/
  };

  showInApp = (notification, id, showNotification) => {
    if (AppState.currentState === APP_STATE.BACKGROUND) {
      return;
    } else {
      //Dismisses the notification from notification bar if app is opened
      Notifications.dismissNotificationAsync(id);
    }

    showNotification({
      title: notification.data.title,
      message: notification.data.body,
      icon: notification.data.image,
      onPress: () => this.handleOnClick(notification)
    });
  };
}

export const notificationHandleService = new NotificationHandleService();
