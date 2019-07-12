import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { GiftedChat } from 'react-native-gifted-chat';

import { usersSelector } from '../../../store/selectors/UserSelector';
import { userSelector } from '../../../store/selectors/ActiveUserSelector';

import { getChat } from '../../../store/actions/ChatActions';

class Chat extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <GiftedChat />
      </View>
    );
  }
}

const mapDispatchToProps = { getChat };

const mapStateToProps = state => {
  return {
    user: userSelector(state),
    users: usersSelector(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1
  }
});
