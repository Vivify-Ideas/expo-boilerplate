import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const ModalHeader = ({ children }) => {
  return <View>{children}</View>;
};

export default ModalHeader;

ModalHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};
