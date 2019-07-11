import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/main/HomeScreen';
import SettingsScreen from '../screens/main/SettingsScreen';
import LeftSliderScreen from '../screens/main/LeftSliderScreen';
import { addHeaderLeftNavigator } from '../helpers';
import ChangePassword from '../screens/main/profile/ChangePassword';
import EditProfile from '../screens/main/profile/EditProfile';
import CreateConversation from '../screens/main/chat/CreateConversation';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  ChangePassword,
  EditProfile
});

/* eslint-disable react/prop-types, react/display-name */
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => {
      const headerLeftNav = addHeaderLeftNavigator(navigation);
      return { ...headerLeftNav, title: 'Settings' };
    }
  }
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  )
};

const ChatStack = createStackNavigator({
  CreateChat: {
    screen: CreateConversation,
    navigationOptions: ({ navigation }) => {
      const headerLeftNav = addHeaderLeftNavigator(navigation);
      return { ...headerLeftNav, title: 'Chat' };
    }
  }
});

ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'chatboxes'} />
  )
};

const BottomTabNavigator = createBottomTabNavigator({
  HomeStack,
  SettingsStack,
  ChatStack
});

export default createDrawerNavigator(
  {
    BottomTabNavigator: BottomTabNavigator
  },
  {
    contentComponent: LeftSliderScreen
  }
);
