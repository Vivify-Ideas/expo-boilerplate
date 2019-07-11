import { AsyncStorage, Platform } from 'react-native';
import { Google } from 'expo';
import * as Facebook from 'expo-facebook';
import ApiService from './ApiService';
import config from '../config';
import { askForNotificationsPermission } from '../services/PermissionsService';
// import notificationService from './NotificationService';
import { OS_TYPES } from '../constants';

const { ANDROID_GOOGLE_CLIENT_ID, IOS_GOOGLE_CLIENT_ID, FACEBOOK_APP_ID } = config;

const { CLIENT_ID } = config;

const ENDPOINTS = {
  LOGIN: '/auth/login',
  SIGN_UP: '/auth/register',
  LOGOUT: '/auth/logout',
  FACEBOOK: '/auth/social/facebook',
  GOOGLE: '/auth/social/google',
  FORGOT_PASSWORD: '/user/forgot-password',
  RESET_PASSWORD: '/user/reset-password'
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
        Authorization: `Bearer ${token}`
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
      // notificationService.sendExpoTokenToServer(expoPushToken);
    }
  };

  destroySession = async () => {
    await AsyncStorage.clear();
    this.api.removeHeaders(['Authorization']);
  };

  login = async loginData => {
    const { data } = await this.apiClient.post(ENDPOINTS.LOGIN, loginData);
    await this.createSession(data);
    return data;
  };

  googleLogin = async loginPromise => {
    const result = await loginPromise;
    if (result.type !== 'success') {
      throw new Error(result.type);
    }
    const { data } = await this.apiClient.post(ENDPOINTS.GOOGLE, {
      accessToken: result.accessToken
    });
    await this.createSession(data);

    return data;
  };

  loginWithGoogle = async () => {
    return await this.googleLogin(
      Google.logInAsync({
        clientId: Platform.OS == OS_TYPES.IOS ? IOS_GOOGLE_CLIENT_ID : ANDROID_GOOGLE_CLIENT_ID,
        scopes: ['profile', 'email']
      })
    );
  };

  facebookLogin = async loginPromise => {
    const result = await loginPromise;
    if (result.type !== 'success') {
      throw new Error(result.type);
    }
    const { data } = await this.apiClient.post(ENDPOINTS.FACEBOOK, { accessToken: result.token });
    await this.createSession(data);

    return data;
  };

  loginWithFacebook = async () => {
    return await this.facebookLogin(
      Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
        permissions: ['public_profile', 'email']
      })
    );
  };

  logout = async () => {
    const { data } = await this.apiClient.post(ENDPOINTS.LOGOUT);
    await this.destroySession();
    return { ok: true, data };
  };

  forgotPassword = data => {
    return this.apiClient.post(ENDPOINTS.FORGOT_PASSWORD, data);
  };

  resetPassword = data => {
    return this.apiClient.post(ENDPOINTS.RESET_PASSWORD, data);
  };

  signup = async signupData => {
    await this.apiClient.post(ENDPOINTS.SIGN_UP, signupData);
    const { email, password } = signupData;
    return this.login({ email, password });
  };

  getToken = async () => {
    const user = await AsyncStorage.getItem('user');
    return user ? JSON.parse(user).access_token : undefined;
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
