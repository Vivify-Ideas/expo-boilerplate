import React from 'react';
import { ActivityIndicator, View, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveUser } from '../store/actions/UserActions';
import authService from '../services/AuthService';

class AuthLoadingScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    onLogin: PropTypes.func,
    setActiveUser: PropTypes.func
  };

  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const user = await authService.getUser();
    if (user) {
      this.props.setActiveUser(user);
    }

    // This will switch to the Main screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(user ? 'MainStack' : 'AuthStack');
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
  setActiveUser
};

export default connect(
  null,
  mapDispatchToProps
)(AuthLoadingScreen);
