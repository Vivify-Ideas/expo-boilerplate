import { createStackNavigator } from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

export default createStackNavigator({ 
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});