import React from 'react';
import { Text, StyleSheet } from 'react-native';

export class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, styles.text]} />;
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'space-mono'
  }
});
