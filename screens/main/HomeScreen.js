import React, { useState } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';

import { addHeaderLeftNavigator } from '../../helpers';
import $t from 'i18n';
import { activeUserSelector, logout } from '../../store/auth';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  const user = useSelector(activeUserSelector());

  const [modalVisible, setModalVisible] = useState(false);

  const _signOutAsync = async () => {
    handleLogout();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
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

        <Button title="Actually, sign me out :)" onPress={_signOutAsync} />

        <Button onPress={() => setModalVisible(true)} title="Show Modal" />

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => alert('Modal has been closed.')}
        >
          <SafeAreaView style={styles.container}>
            <View>
              <Text>{$t('helloWorld')}</Text>

              <Button
                onPress={() => setModalVisible(!modalVisible)}
                title="Hide Modal"
              />
            </View>
          </SafeAreaView>
        </Modal>
      </ScrollView>

      <View style={styles.tabBarInfoContainer} />
    </View>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => {
  const headerLeftNav = addHeaderLeftNavigator(navigation);
  return { ...headerLeftNav, title: 'Home' };
};

export default HomeScreen;

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
