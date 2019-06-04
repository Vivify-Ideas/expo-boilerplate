import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';

export default class LeftSliderScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Button onPress={() => this.props.navigation.closeDrawer()} title="Close me" />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangePassword')}>
            <Text>{$t('profile.changePassword.changePassword')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfile')}>
            <Text>{$t('profile.updateUser.updateProfile')}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
