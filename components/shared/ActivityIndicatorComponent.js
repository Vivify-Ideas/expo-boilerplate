import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ActivityIndicatorComponent = ({ animating, transparent = true }) => {
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
  bgColor: {
    backgroundColor
  },
  loading: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
});
