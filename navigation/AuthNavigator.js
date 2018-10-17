import { createStackNavigator } from 'react-navigation';

import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import OfflineScreen from '../screens/OfflineScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';

export default createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
  ForgotPassword: ForgotPasswordScreen,
  ResetPassword: ResetPasswordScreen,
  Offline: {
    screen: OfflineScreen,
    navigationOptions: {
      headerLeft: null
    }
  }
});
