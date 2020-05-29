import React from 'react';
import { View, Text } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import $t from 'i18n';

const OfflineWarning = () => {
  const networkState = useNetInfo();

  return (
    !networkState.isConnected && (
      <View>
        <Text>{$t('common.offline')}</Text>
      </View>
    )
  );
};

export default OfflineWarning;
