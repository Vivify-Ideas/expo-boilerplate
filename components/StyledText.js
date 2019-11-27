import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const MonoText = props => <Text {...props} style={[props.style, styles.text]} />;

MonoText.propTypes = {
  style: PropTypes.object
};

export default MonoText;
const styles = StyleSheet.create({
  text: {
    fontFamily: 'space-mono'
  }
});
