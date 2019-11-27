import React, { useEffect } from 'react';
import { View, Text, BackHandler } from 'react-native';
import $t from 'i18n';

const OfflineScreen = () => {
  var backHandler = null;

  useEffect(() => {
    backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => backHandler.remove();
  }, []);

  return (
    <View>
      <Text>{$t('auth.offline')}</Text>
    </View>
  );
};
export default OfflineScreen;
