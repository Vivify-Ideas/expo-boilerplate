import React from 'react';
import { Icon } from 'expo';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  static displayName = 'TabBarIcon';

  static propTypes = {
    name: PropTypes.string.isRequired,
    focused: PropTypes.bool
  };

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
