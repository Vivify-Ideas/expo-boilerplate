import React, { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import authService from '../services/AuthService';
import { getActiveUser, activeUserSelector } from '../store/auth';

const AuthLoadingScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleGetUser = () => dispatch(getActiveUser());

  const user = useSelector(activeUserSelector());
  useEffect(() => {
    bootstrapAsync();
  }, []);

  useEffect(() => {
    if (user.id) {
      navigation.navigate('MainStack');
    }
  }, [user.id]);

  // Fetch the token from storage then navigate to our appropriate place
  const bootstrapAsync = async () => {
    const user = await authService.getUser();
    if (user) {
      handleGetUser();
    } else {
      navigation.navigate('AuthStack');
    }

    // This will switch to the Main screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
  };

  // Render any loading content that you like here
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.loading} />
      <StatusBar barStyle="default" />
    </View>
  );
};

AuthLoadingScreen.propTypes = {
  navigation: PropTypes.object
};

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },

  loading: {
    marginTop: 30
  }
});
