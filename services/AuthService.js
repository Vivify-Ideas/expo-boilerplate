import BaseService from './BaseService';
import { AsyncStorage } from 'react-native';
import Expo from 'expo';
// import Sentry from 'sentry-expo';
import config from '../config';
import { registerForPushNotificationsAsync } from '../utils/NavigationService';
// import notificationService from '../../services/api/NotificationService';

const { androidClientId, iosClientId, facebookAppId } = config;

const { CLIENT_ID } = config;

const ENDPOINTS = {
  LOGIN: '/auth/login/',
  SIGN_UP: '/auth/sign-up',
  LOGIN_SOCIAL: '/login-social',
  LOGOUT: '/auth/logout',
  RESET_PASSWORD: '/auth/forgot-password'
};

class AuthService extends BaseService {
  constructor() {
    super();
    this.init();
  }

  init = async () => {
    const token = this.getToken();
    const user = this.getUser();

    if (token && user) {
      await this.setAuthorizationHeader();
      this.api.setUnauthorizedCallback(this.destroySession.bind(this));
    }
  };

  setAuthorizationHeader = async () => {
    const token = await this.getToken();

    if (token) {
      this.api.attachHeaders({
        Authorization: `Bearer ${token.access_token}`
      });
    }

    this.api.attachHeaders({
      clientId: CLIENT_ID
    });
  };

  createSession = async data => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(data));
      await this.setAuthorizationHeader();
      const expoPushToken = await registerForPushNotificationsAsync();
      await AsyncStorage.setItem('expoPushToken', expoPushToken.data.secret);
    } catch (error) {
      // Sentry.captureException(error);
    }
  };

  destroySession = async () => {
    try {
      await AsyncStorage.removeItem('user');
      // await notificationService.removeExpoTokenFromServer();
    } catch (error) {
      // Sentry.captureException(error);
    }

    this.api.removeHeaders(['Authorization']);
  };

  login = async loginData => {
    try {
      const { data } = await this.apiClient().post(ENDPOINTS.LOGIN, loginData);
      this.createSession(data);
      return { ok: true, data };
    } catch (e) {
      return { ok: false, error: e };
    }
  };

  socialLogin = async loginPromise => {
    try {
      const result = await loginPromise;
      if (result.type === 'success') {
        const { data } = await this.apiClient().post(ENDPOINTS.LOGIN_SOCIAL, result);
        this.createSession(data);
        return { ok: true, data };
      }
      return { ok: false, error: result.type };
    } catch (e) {
      // Sentry.captureException(e);
      return { ok: false, error: e };
    }
  };

  loginWithGoogle = async () => {
    return await this.socialLogin(
      Expo.Google.logInAsync({
        androidClientId,
        iosClientId,
        scopes: ['profile', 'email']
      })
    );
  };

  loginWithFacebook = async () => {
    return await this.socialLogin(
      Expo.Facebook.logInWithReadPermissionsAsync(facebookAppId, {
        permissions: ['public_profile', 'email']
      })
    );
  };

  logout = async () => {
    await this.destroySession();
  };

  resetPassword = ({ email }) => {
    return this.apiClient().post(ENDPOINTS.RESET_PASSWORD, { email });
  };

  signup = signupData => {
    return this.apiClient()
      .post(ENDPOINTS.SIGN_UP, signupData)
      .then(() => {
        const { email, password } = signupData;
        return this.login({ email, password });
      });
  };

  getToken = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      return user ? JSON.parse(user).token : undefined;
    } catch (error) {
      // Sentry.captureException(error);
      return null;
    }
  };

  getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      return JSON.parse(user);
    } catch (error) {
      // Sentry.captureException(error);
      return null;
    }
  };

  updateUserInStorage = async property => {
    try {
      const user = await AsyncStorage.getItem('user');
      let jsonUser = JSON.parse(user);
      jsonUser = { ...jsonUser, ...property };
      AsyncStorage.setItem('user', JSON.stringify(jsonUser));
    } catch (error) {
      // Sentry.captureException(error);
      return null;
    }
  };
}
const authService = new AuthService();
export default authService;
