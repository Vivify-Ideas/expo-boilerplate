import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ActivityIndicatorComponent = ({ animating, transparent = false }) => {
  return (
    <ActivityIndicator
      style={[styles.loading, !transparent && styles.bgColor]}
      animating={animating}
      size="large"
    />
  );
};
export default ActivityIndicatorComponent;

ActivityIndicatorComponent.propTypes = {
  animating: PropTypes.bool,
  transparent: PropTypes.bool
};

const backgroundColor = '#ffffff';
const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgColor: {
    backgroundColor
  }
});
