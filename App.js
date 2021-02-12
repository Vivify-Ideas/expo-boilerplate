import React from 'react';
import { Platform, StatusBar, StyleSheet, View, LogBox, Text, TextInput } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as Icon from '@expo/vector-icons';
import Sentry from 'sentry-expo';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { InAppNotificationProvider } from 'react-native-in-app-notification';

import store from './store';
import NavigationService from './services/NavigationService';
import AppNavigator from './navigation/AppNavigator';
import NetworkInterceptor from './screens/NetworkInterceptor';

if (!__DEV__) {
  // TODO replace key, and project with variables from ENV file
  Sentry.config('https://<key>@sentry.io/<project>').install();
}

LogBox.ignoreLogs(['react-native-i18n module is not correctly linked']);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  static propTypes = {
    skipLoadingScreen: PropTypes.bool
  };

  componentDidMount() {
    this._disableFontScaling();
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <InAppNotificationProvider height={150}>
            <NetworkInterceptor>
              <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <AppNavigator
                  ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                  }}
                />
              </View>
            </NetworkInterceptor>
          </InAppNotificationProvider>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'montserrat-italic': require('./assets/fonts/Montserrat-Italic.ttf'),
        'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf')
      })
    ]);
  };

  _handleLoadingError = error => {
    Sentry.captureException(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  _disableFontScaling = async () => {
    Text.defaultProps = {
      allowFontScaling: false
    };
    TextInput.defaultProps = {
      allowFontScaling: false
    };
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
