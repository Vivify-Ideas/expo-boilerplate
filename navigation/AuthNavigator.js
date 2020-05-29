import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import ForgotPasswordSuccess from '../screens/auth/ForgotPasswordSuccess';
import ResetPasswordSuccess from '../screens/auth/ResetPasswordSuccess';

export default createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
  ForgotPassword: ForgotPasswordScreen,
  ForgotPasswordSuccess,
  ResetPassword: ResetPasswordScreen,
  ResetPasswordSuccess
});
