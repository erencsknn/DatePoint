import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native"
import Home from './Screens/Home';
import Login from './Screens/Login';
import GeciciBaslangicSayfasi from './Screens/GeciciBaslangicSayfasi';

const Stack = createNativeStackNavigator();

const myStack = () => {
   return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  name='GeciciSayfa' component={GeciciBaslangicSayfasi} />
      <Stack.Screen  name='Home' component={Home} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
    </NavigationContainer>
   )
}



export default myStack