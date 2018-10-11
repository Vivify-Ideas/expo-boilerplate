import React from 'react';
import {AsyncStorage, StyleSheet, View, Button} from 'react-native';
import PropTypes from 'prop-types';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign up',
  };

  static propTypes = {
    navigation: PropTypes.object,
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign up!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
