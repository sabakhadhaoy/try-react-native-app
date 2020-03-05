import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './components/Login';
import Register from './components/Register';
import Index from './components/Index';

const StackNavigator = createStackNavigator({

  IndexScreen: {
    screen: Index,
    navigationOptions: {
      headerShown: false
    }
  },
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
  },
})

export default createAppContainer(StackNavigator);

