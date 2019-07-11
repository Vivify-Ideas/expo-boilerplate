import React from 'react';
import { ActivityIndicator, View, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveUser, getUser } from '../store/actions/UserActions';
import authService from '../services/AuthService';
import { userSelector } from '../store/selectors/ActiveUserSelector';

class AuthLoadingScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    onLogin: PropTypes.func,
    setActiveUser: PropTypes.func,
    getUser: PropTypes.func,
    user: PropTypes.object
  };

  componentDidMount() {
    this._bootstrapAsync();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.id !== this.props.user.id) {
      this.props.navigation.navigate('MainStack');
    }
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const user = await authService.getUser();
    if (user) {
      this.props.setActiveUser(user);
      this.props.getUser();
    } else {
      this.props.navigation.navigate('AuthStack');
    }

    // This will switch to the Main screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.loading} />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },

  loading: {
    marginTop: 30
  }
});

const mapDispatchToProps = {
  setActiveUser,
  getUser
};

const mapStateToProps = state => {
  return {
    user: userSelector(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingScreen);
