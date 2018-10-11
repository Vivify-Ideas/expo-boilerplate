import { createStackNavigator } from 'react-navigation';

import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

export default createStackNavigator({ 
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});