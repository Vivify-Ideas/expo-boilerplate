import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import $t from 'i18n';

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
        <Text>{$t('auth.offline')}</Text>
      </View>
    );
  }
}
export default OfflineScreen;
