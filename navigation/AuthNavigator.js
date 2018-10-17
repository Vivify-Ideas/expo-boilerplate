import { createStackNavigator } from 'react-navigation';

import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import OfflineScreen from '../screens/OfflineScreen';

export default createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
  Offline: {
    screen: OfflineScreen,
    navigationOptions: {
      headerLeft: null
    }
  }
});
