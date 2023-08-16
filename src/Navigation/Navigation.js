
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screeen/SplashScreen';
import AllNavigation from './AllNavigation';

const Stack = createNativeStackNavigator();



export default function Navigation() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Splash Screen'
          component={SplashScreen}
          options={{
            headerShown: false
          }}

        />

        <Stack.Screen
          name='AllNavigation'
          component={AllNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}