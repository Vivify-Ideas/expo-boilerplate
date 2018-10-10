import React from 'react';
import { Icon } from 'expo';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={styles.icon}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: { 
    marginBottom: -3 
  }
});