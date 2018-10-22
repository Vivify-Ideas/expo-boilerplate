import React from 'react';
import { ActivityIndicator, AsyncStorage, View, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../store/actions/userActions';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  static propTypes = {
    navigation: PropTypes.object,
    onLogin: PropTypes.func
  };

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    if (userToken) {
      this.props.onLogin({ email: userToken });
    }

    // This will switch to the Main screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
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
    flex: 1,
    backgroundColor: '#fff'
  },

  loading: {
    marginTop: 30
  }
});

const mapDispatchToProps = dispatch => ({
  onLogin: user => {
    dispatch(login(user));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AuthLoadingScreen);
