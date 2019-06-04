import React, { Component } from 'react';
import { NetInfo, View, StyleSheet } from 'react-native';
import NavigationService from '../services/NavigationService';
import { Linking, Notifications } from 'expo';
import PropTypes from 'prop-types';

import authService from '../services/AuthService';
import ActivityIndicatorComponent from '../components/shared/ActivityIndicatorComponent';
import { connect } from 'react-redux';
import { loaderSelector } from '../store/selectors/LoaderSelector';
import PasswordChangedModal from '../components/shared/modal/PasswordChangeModal';
import { passwordChangedSelector } from '../store/selectors/UserSelector';
import { setChangePasswordSuccess } from '../store/actions/UserActions';
import ErrorModal from '../components/shared/modal/ErrorModal';
import { globalErrorSelector } from '../store/selectors/ErrorSelector';
import { setGlobalError } from '../store/actions/ErrorActions';

class NetworkInterceptor extends Component {
  static propTypes = {
    children: PropTypes.any,
    loader: PropTypes.bool,
    globalError: PropTypes.bool,
    setGlobalError: PropTypes.func,
    setChangePasswordSuccess: PropTypes.func,
    passwordChanged: PropTypes.bool
  };

  componentDidMount() {
    this._connectionInfo();
    this._setUrlEventListener();
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
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
      NavigationService.navigate('AuthStack');
      return;
    }

    if (queryParams.notifications) {
      NavigationService.navigate('NotificationsScreen');
      return;
    }
  }

  render() {
    const {
      passwordChanged,
      setChangePasswordSuccess,
      globalError,
      setGlobalError,
      loader,
      children
    } = this.props;

    return (
      <View style={styles.container}>
        {children}
        {loader && <ActivityIndicatorComponent animating />}
        <PasswordChangedModal
          isVisible={passwordChanged}
          closeModal={() => setChangePasswordSuccess(false)}
        />
        <ErrorModal isVisible={globalError} closeModal={() => setGlobalError(false)} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loader: loaderSelector(state),
    passwordChanged: passwordChangedSelector(state),
    globalError: globalErrorSelector(state)
  };
};

const mapDispatchToProps = {
  setChangePasswordSuccess,
  setGlobalError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NetworkInterceptor);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
