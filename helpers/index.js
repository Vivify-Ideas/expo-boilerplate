import React from 'react';
import * as Icon from '@expo/vector-icons';

export const addHeaderLeftNavigator = navigation => {
  const styles = {
    menuIcon: {
      marginLeft: 10,
      marginTop: 10
    }
  };

  return {
    headerLeft: (
      <Icon.Ionicons
        name="ios-menu"
        size={24}
        onPress={() => {
          navigation.toggleDrawer();
        }}
        style={styles.menuIcon}
      />
    )
  };
};
