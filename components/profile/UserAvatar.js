import React from 'react';
import PropTypes from 'prop-types';

import Picture from '../shared/Picture';
import defaultAvatar from '../../assets/images/robot-dev.png';

const UserAvatar = ({ avatar }) =>
  avatar !== null ? <Picture uri={avatar} /> : <Picture source={defaultAvatar} />;

export default UserAvatar;

UserAvatar.propTypes = { avatar: PropTypes.string };
