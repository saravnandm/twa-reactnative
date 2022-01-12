import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import WebScreen from './src/screens/WebScreen';


const navigator = createStackNavigator(
  {
    HomePage: HomeScreen,
    WebPage: WebScreen
  }, 
  {
    initialRouteName: 'HomePage',
    defaultNavigationOptions: {
      title: 'PWA Demo'
    }
  }
);

export default createAppContainer(navigator);