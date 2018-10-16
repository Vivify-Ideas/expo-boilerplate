import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const FONT_FAMILY = {
  REGULAR: { fontFamily: 'montserrat-regular' },
  BOLD: { fontFamily: 'montserrat-bold' },
  ITALIC: { fontFamily: 'montserrat-italic' }
};

const CustomText = props => {
  const getFontFamily = () => {
    if (props.bold) {
      return FONT_FAMILY.BOLD;
    } else if (props.italic) {
      return FONT_FAMILY.ITALIC;
    } else {
      return FONT_FAMILY.REGULAR;
    }
  };

  return <Text style={[getFontFamily(), props.style]}>{props.children}</Text>;
};

CustomText.propTypes = {
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.children
};

export default CustomText;
