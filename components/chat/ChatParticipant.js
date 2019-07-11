import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const ChatParticipant = ({ participant, removeParticipant }) => (
  <View>
    <Text>{`${participant.first_name} ${participant.last_name}`}</Text>
    <TouchableOpacity onPress={() => removeParticipant(participant)}>
      <Text>x</Text>
    </TouchableOpacity>
  </View>
);

export default ChatParticipant;

ChatParticipant.propTypes = { participant: PropTypes.object, removeParticipant: PropTypes.func };
