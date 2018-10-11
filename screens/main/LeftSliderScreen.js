import React from 'react';
import {
  StyleSheet,
  Button,
  View
} from 'react-native';

export default class LeftSliderScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Close me"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});