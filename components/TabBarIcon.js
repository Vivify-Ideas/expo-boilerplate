import React from 'react';
import * as Icon from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';

const TabBarIcon = ({ name, focused }) => {
  return (
    <Icon.Ionicons
      name={name}
      size={26}
      style={styles.icon}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
};

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool
};

TabBarIcon.displayName = 'TabBarIcon';
export default TabBarIcon;

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3
  }
});
