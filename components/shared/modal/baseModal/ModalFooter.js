import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const ModalFooter = ({ children }) => {
  return <View>{children}</View>;
};

export default ModalFooter;

ModalFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};
