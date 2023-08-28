import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screeen/SplashScreen';
import AllBottomTabNavigation from './AllBottomTabNavigation';
import AdvisorDetail from '../screeen/AdvisorDetail';
import FilterScreen from '../screeen/FilterScreen';
import AdvisorChat from '../screeen/AdvisorChat';
import UniversityDetail from '../screeen/UniversityDetail';
import ScheduleDetail from '../screeen/ScheduleDetail';
import RatingScreen from '../screeen/RatingScreen';
import EducationInformation from '../screeen/EducationInformation';
import AddEducationInformation from '../screeen/AddEducationInformation';
import EditEducationInformation from '../screeen/EditEducationInformation';
import ForgotPassword from '../screeen/ForgotPassword';


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
          name='AllBottomTabNavigation'
          component={AllBottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='FilterScreen'
          component={FilterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='AdvisorDetail'
          component={AdvisorDetail}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name='AdvisorChat'
          component={AdvisorChat}

        />
        <Stack.Screen
          name='UniversityDetail'
          component={UniversityDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='ScheduleDetail'
          component={ScheduleDetail}
          options={{
            title: 'Details',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Text style={{ fontWeight: 'bold', color: '#6B0554', }}>EDIT</Text>
            )
          }}
        />
        <Stack.Screen
          name='Rating'
          component={RatingScreen}
          options={{
            headerTitle: 'Rate Your Experience',
            headerTitleAlign: 'center',

          }}
        />
        <Stack.Screen
          name='Education Information'
          component={EducationInformation}
          options={{
            headerTitle: 'Education Information',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name='Add Education Information'
          component={AddEducationInformation}
          options={{
            headerTitle: 'Add Education Information',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name='Edit Education Information'
          component={EditEducationInformation}
          options={{
            headerTitle: 'Edit Education Information',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name='Forgot Password'
          component={ForgotPassword}
          options={{
            headerShown: false
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}