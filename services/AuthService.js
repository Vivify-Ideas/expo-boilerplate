import ApiService from './ApiService';
import { AsyncStorage } from 'react-native';
import Expo from 'expo';
import config from '../config';
import { askForNotificationsPermission } from '../services/PermissionsService';

const { androidClientId, iosClientId, facebookAppId } = config;

const { CLIENT_ID } = config;

const ENDPOINTS = {
  LOGIN: '/login',
  SIGN_UP: '/register',
  LOGIN_SOCIAL: '/login-social',
  LOGOUT: '/logout',
  RESET_PASSWORD: '/auth/forgot-password',
  CHANGE_PASSWORD: '/auth/change-password'
};

class AuthService extends ApiService {
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

  createSession = async user => {
    await AsyncStorage.setItem('user', JSON.stringify(user));
    await this.setAuthorizationHeader();
    const expoPushToken = await askForNotificationsPermission();
    if (expoPushToken) {
      await AsyncStorage.setItem('expoPushToken', expoPushToken);
      // TODO this token need to be saved on BE
    }
  };

  destroySession = async () => {
    await AsyncStorage.clear();
    this.api.removeHeaders(['Authorization']);
  };

  login = async loginData => {
    try {
      const { data } = await this.apiClient.post(ENDPOINTS.LOGIN, loginData);
      this.createSession(data);
      return { ok: true, data };
    } catch (error) {
      throw error;
    }
  };

  socialLogin = async loginPromise => {
    try {
      const result = await loginPromise;
      if (result.type === 'success') {
        const { data } = await this.apiClient.post(ENDPOINTS.LOGIN_SOCIAL, result);
        this.createSession(data);
        return { ok: true, data };
      }
      return { ok: false, error: result.type };
    } catch (e) {
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
    const { data } = await this.apiClient.post(ENDPOINTS.LOGOUT);
    await this.destroySession();
    return { ok: true, data };
  };

  resetPassword = email => {
    return this.apiClient.post(ENDPOINTS.RESET_PASSWORD, { email });
  };

  changePassword = data => {
    return this.apiClient.post(ENDPOINTS.CHANGE_PASSWORD, data);
  };

  signup = signupData => {
    return this.apiClient.post(ENDPOINTS.SIGN_UP, signupData).then(() => {
      const { email, password } = signupData;
      return this.login({ email, password });
    });
  };

  getToken = async () => {
    const user = await AsyncStorage.getItem('user');
    return user ? JSON.parse(user).token : undefined;
  };

  getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    return JSON.parse(user);
  };

  updateUserInStorage = async property => {
    const user = await AsyncStorage.getItem('user');
    let jsonUser = JSON.parse(user);
    jsonUser = { ...jsonUser, ...property };
    AsyncStorage.setItem('user', JSON.stringify(jsonUser));
  };
}

const authService = new AuthService();
export default authService;
