import React from 'react';
import { StyleSheet, Button, View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

export default class LeftSliderScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Button onPress={() => this.props.navigation.goBack()} title="Close me" />
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
