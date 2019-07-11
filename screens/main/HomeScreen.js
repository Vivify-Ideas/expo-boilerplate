import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addHeaderLeftNavigator } from '../../helpers';
import $t from 'i18n';
import { logout } from '../../store/actions/UserActions';
import { userSelector } from '../../store/selectors/ActiveUserSelector';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const headerLeftNav = addHeaderLeftNavigator(navigation);
    return { ...headerLeftNav, title: 'Home' };
  };

  static propTypes = {
    navigation: PropTypes.object,
    user: PropTypes.object,
    logout: PropTypes.func
  };

  state = {
    modalVisible: false
  };

  _signOutAsync = async () => {
    this.props.logout();
  };

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { user } = this.props.user;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text>{$t('helloWorld')}</Text>
            {user && <Text>{user.email}</Text>}
            <Image
              source={
                __DEV__
                  ? require('../../assets/images/robot-dev.png')
                  : require('../../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />

          <Button
            onPress={() => {
              this._setModalVisible(true);
            }}
            title="Show Modal"
          />

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}
          >
            <SafeAreaView style={styles.container}>
              <View>
                <Text>{$t('helloWorld')}</Text>

                <Button
                  onPress={() => {
                    this._setModalVisible(!this.state.modalVisible);
                  }}
                  title="Hide Modal"
                />
              </View>
            </SafeAreaView>
          </Modal>
        </ScrollView>

        <View style={styles.tabBarInfoContainer} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { user: userSelector(state) };
};

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  contentContainer: {
    paddingTop: 30
  },

  tabBarInfoContainer: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  welcomeImage: {
    height: 80,
    marginLeft: -10,
    marginTop: 3,
    resizeMode: 'contain',
    width: 100
  }
});
