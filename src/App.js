import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './components/Login';
import Register from './components/Register';

const StackNavigator = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  },
  RegisterScreen: {
    screen: Register,
    navigationOptions: {
      headerShown: false
    }
  }
})

export default createAppContainer(StackNavigator);

