import ApiService from './ApiService';
import { AsyncStorage } from 'react-native';

const ENDPOINTS = {
  NOTIFICATIONS: '/profiles/me/notifications',
  NOTIFICATION_SETTINGS: '/users/notifications/settings',
  SEND_EXPO_TOKEN: '/exponent/devices/subscribe',
  REMOVE_EXPO_TOKEN: '/exponent/devices/unsubscribe'
};

class NotificationService extends ApiService {
  getNotifications = () => this.apiClient.get(ENDPOINTS.NOTIFICATIONS);

  getNotificationSettings = () => this.apiClient.get(ENDPOINTS.NOTIFICATION_SETTINGS);

  updateNotificationSettings = data => this.apiClient.put(ENDPOINTS.NOTIFICATION_SETTINGS, data);

  sendExpoTokenToServer = expoPushToken =>
    this.apiClient.post(ENDPOINTS.SEND_EXPO_TOKEN, {
      expo_token: expoPushToken
    });

  removeExpoTokenFromServer = async () => {
    try {
      const expoPushToken = await AsyncStorage.getItem('expoPushToken');
      this.apiClient.post(ENDPOINTS.REMOVE_EXPO_TOKEN, {
        secret: expoPushToken
      });
    } catch {
      return;
    }
  };
}

const notificationService = new NotificationService();

export default notificationService;
