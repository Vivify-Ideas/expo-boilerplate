import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import { addHeaderLeftNavigator } from '../helpers';

export default class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const headerLeftNav = addHeaderLeftNavigator(navigation);
    return {...headerLeftNav, title: 'Settings'};
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
