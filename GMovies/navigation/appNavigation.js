import {NavigationContainer} from '@react-navigation/native'
import { createNavigationContainerRef } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen';
import HomeScreen from '../screens/MovieScreen';
import HomeScreen from '../screens/PersonScreen';
import HomeScreen from '../screens/SearchScreen';

const Stack = createNavigationContainerRef();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
            <Stack.Screen name='Movie' options={{headerShown: false}} component={MovieScreen} />
            <Stack.Screen name='Person' options={{headerShown: false}} component={PersonScreen} />
            <Stack.Screen name='Search' options={{headerShown: false}} component={SearchScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}