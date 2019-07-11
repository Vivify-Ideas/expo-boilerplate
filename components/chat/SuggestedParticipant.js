import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import UserAvatar from '../profile/UserAvatar';

const SuggestedParticipant = ({ participant, addParticipant }) => {
  return (
    <TouchableOpacity onPress={() => addParticipant(participant)}>
      <UserAvatar avatar={participant.avatar} />
      <Text>{`${participant.first_name} ${participant.last_name}`}</Text>
    </TouchableOpacity>
  );
};

export default SuggestedParticipant;

SuggestedParticipant.propTypes = { participant: PropTypes.object, addParticipant: PropTypes.func };
