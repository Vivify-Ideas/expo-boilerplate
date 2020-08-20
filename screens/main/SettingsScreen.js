import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

class Tab1 extends React.Component {
  render() {
    return <ExpoConfigView />;
  }
}

class Tab2 extends React.Component {
  render() {
    return <ExpoConfigView />;
  }
}

class Tab3 extends React.Component {
  render() {
    return <ExpoConfigView />;
  }
}

class Tab4 extends React.Component {
  render() {
    return <ExpoConfigView />;
  }
}

class Tab5 extends React.Component {
  render() {
    return <ExpoConfigView />;
  }
}

export default createMaterialTopTabNavigator(
  {
    Tab1,
    Tab2,
    Tab3,
    Tab4,
    Tab5
  },
  {
    lazy: true,
    tabBarOptions: {
      scrollEnabled: true
    }
  }
);
