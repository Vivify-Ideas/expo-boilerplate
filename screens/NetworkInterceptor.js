import { Component } from 'react';
import { NetInfo } from 'react-native';
import NavigationService from '../services/NavigationService';
import { Linking, Notifications } from 'expo';
import PropTypes from 'prop-types';
import authService from '../services/AuthService';

class NetworkInterceptor extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  componentDidMount() {
    this._connectionInfo();
    this._setUrlEventListener();
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  // handle push notifications
  // _handleNotification = notification => {
  // };

  _connectionInfo = () => {
    NetInfo.isConnected.addEventListener('connectionChange', connectionInfo => {
      connectionInfo
        ? NavigationService.navigate('AuthLoading')
        : NavigationService.navigate('Offline');
    });
  };

  _setUrlEventListener = () => {
    //If app is in background
    Linking.addEventListener('url', event => {
      let { queryParams } = Linking.parse(event.url);
      this._processUrlEvent(queryParams);
    });

    //If app is not open
    Linking.getInitialURL().then(url => {
      let { queryParams } = Linking.parse(url);
      this._processUrlEvent(queryParams);
    });
  };

  async _processUrlEvent(queryParams) {
    const userToken = await authService.getToken();

    if (queryParams.forgot_password_token) {
      NavigationService.navigate('ResetPassword', {
        forgot_password_token: queryParams.forgot_password_token
      });
      return;
    }

    if (!userToken) {
      NavigationService.navigate('Auth');
      return;
    }

    if (queryParams.notifications) {
      NavigationService.navigate('NotificationsScreen');
      return;
    }
  }

  render() {
    return this.props.children;
  }
}

export default NetworkInterceptor;
