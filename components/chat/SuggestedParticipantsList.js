import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import SuggestedParticipant from './SuggestedParticipant';

const SuggestedParticipantsList = ({ users, addParticipant }) => {
  /* eslint-disable react/prop-types */
  const renderSuggestedUsers = ({ item }) => (
    <SuggestedParticipant participant={item} addParticipant={addParticipant} />
  );

  return (
    <FlatList
      data={users}
      renderItem={renderSuggestedUsers}
      keyExtractor={(_, index) => index.toString()}
      style={styles.suggesteionList}
      keyboardShouldPersistTaps="always"
    />
  );
};

export default SuggestedParticipantsList;

SuggestedParticipantsList.propTypes = {
  users: PropTypes.array,
  addParticipant: PropTypes.func
};

const styles = StyleSheet.create({
  suggesteionList: {
    position: 'absolute',
    top: 25 * 2
  }
});
