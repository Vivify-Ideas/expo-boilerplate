import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Keyboard, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import $t from 'i18n';

import { usersSelector } from '../../../store/selectors/UserSelector';
import { getUserSearch, setUserSearch } from '../../../store/actions/UserActions';
import SuggestedParticipantsList from '../../../components/chat/SuggestedParticipantsList';
import ChatParticipantsList from '../../../components/chat/ChatParticipantsList';
import { DEBOUNCE_TIMER, USERS_SEARCH_SIZE } from '../../../constants';

class CreateConversation extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    users: PropTypes.array,
    setUserSearch: PropTypes.func,
    getUserSearch: PropTypes.func
  };

  state = {
    filter: '',
    participants: []
  };

  handleFilterChange = filter => {
    this.setState({ filter });
    if (filter === '') {
      this.props.setUserSearch([]);
    } else {
      this.debounceFilter();
    }
  };

  debounceFilter = debounce(() => {
    if (this.state.filter) {
      this.props.getUserSearch({
        term: this.state.filter,
        size: USERS_SEARCH_SIZE
      });
    }
  }, DEBOUNCE_TIMER);

  renderParticipants = ({ item }) => <Text>{`${item.first_name} ${item.last_name}`}</Text>;

  addParticipant = async participant => {
    Keyboard.dismiss();
    await this.setState({
      participants: [...this.state.participants, participant],
      filter: ''
    });
    this.props.setUserSearch([]);
  };

  removeParticipant = participant => {
    this.setState({
      participants: this.state.participants.filter(
        participantS => participantS.id !== participant.id
      )
    });
  };

  // getUsers = () => {
  //   const participantsIds = this.state.participants.map(participant => participant.id);

  //   return this.state.filter
  //     ? this.props.filteredUsers.filter(
  //       user => !participantsIds.includes(user.id) && user.id !== this.props.user.profile.id
  //     )
  //     : [];
  // };

  createChat = () => {
    //
  };

  isSubmitDisabled = () => this.state.participants.length === 0;

  render() {
    return (
      <View style={styles.mainContainer}>
        <TextInput
          value={this.state.filter}
          onChangeText={this.handleFilterChange}
          autoCapitalize={'none'}
          spellCheck={false}
          contextMenuHidden
          blurOnSubmit
          autoCorrect={false}
          placeholder={$t('chat.enterParticipant')}
        />
        <SuggestedParticipantsList users={this.props.users} addParticipant={this.addParticipant} />
        {this.state.filter !== '' && <View style={styles.listBackground} />}
        <ChatParticipantsList
          users={this.state.participants}
          removeParticipant={this.removeParticipant}
        />
        <TouchableOpacity>
          <Text>{$t('chat.startConversation')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = { getUserSearch, setUserSearch };

const mapStateToProps = state => {
  return {
    users: usersSelector(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateConversation);

const styles = StyleSheet.create({
  listBackground: {
    backgroundColor: 'black',
    height: '100%',
    opacity: 0.35,
    position: 'absolute',
    width: '100%',
    zIndex: -1
  },
  mainContainer: {
    flexGrow: 1
  }
});
