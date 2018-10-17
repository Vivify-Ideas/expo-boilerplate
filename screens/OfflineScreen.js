import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import I18n from '../i18n';

class OfflineScreen extends Component {
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return (
      <View>
        <Text>{I18n.t('auth.offline')}</Text>
      </View>
    );
  }
}
export default OfflineScreen;
