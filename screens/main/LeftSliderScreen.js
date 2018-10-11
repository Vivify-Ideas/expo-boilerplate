import React from 'react';
import {
  StyleSheet,
  Button,
  View
} from 'react-native';
import PropTypes from 'prop-types';

export default class LeftSliderScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  }
  
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