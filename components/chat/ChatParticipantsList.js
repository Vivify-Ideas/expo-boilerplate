import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import ChatParticipant from './ChatParticipant';

const ChatParticipantsList = ({ users, removeParticipant }) => {
  /* eslint-disable react/prop-types */
  const renderChatParticipant = ({ item }) => (
    <ChatParticipant participant={item} removeParticipant={removeParticipant} />
  );

  return (
    <FlatList
      data={users}
      renderItem={renderChatParticipant}
      keyExtractor={(_, index) => index.toString()}
      style={styles.participantList}
    />
  );
};

export default ChatParticipantsList;

ChatParticipantsList.propTypes = { users: PropTypes.array, removeParticipant: PropTypes.func };

const styles = StyleSheet.create({
  participantList: {
    zIndex: -2
  }
});
