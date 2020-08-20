import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/main/HomeScreen';
import SettingsScreen from '../screens/main/SettingsScreen';
import LeftSlider from '../screens/main/LeftSlider';
import { addHeaderLeftNavigator } from '../helpers';
import ChangePassword from '../screens/main/profile/ChangePassword';
import EditProfile from '../screens/main/profile/EditProfile';

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

const BottomTabNavigator = createBottomTabNavigator({
  HomeStack,
  SettingsStack
});

export default createDrawerNavigator(
  {
    BottomTabNavigator: BottomTabNavigator
  },
  {
    contentComponent: LeftSlider
  }
);
