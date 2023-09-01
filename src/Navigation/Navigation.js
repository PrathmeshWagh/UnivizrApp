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
import UserRegister from '../screeen/UserRegister';
import PhoneNumber from '../screeen/PhoneNumber';
import VerficationCode from '../screeen/VerficationCode';
import SelectCity from '../screeen/SelectCity';
import SelectCountry from '../screeen/SelectCountry';
import PersonalInformation from '../screeen/PersonalInformation';
import ApplicationProgress from '../screeen/ApplicationProgress';
import BecomeAdvisor from '../screeen/BecomeAdvisor';
import FavoriteUniversity from '../screeen/FavoriteUniversity';
import ChangePassword from '../screeen/ChangePassword';


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

        <Stack.Screen
          name='User Registration'
          component={UserRegister}
          options={{
            headerShown: false
          }}
        />


        <Stack.Screen
          name='Phone Number'
          component={PhoneNumber}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='Verification Code'
          component={VerficationCode}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='Select City'
          component={SelectCity}
          options={{
            title: 'Select City',
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          name='Select Country'
          component={SelectCountry}
          options={{
            title: 'Select Country',
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          name='Personal Information'
          component={PersonalInformation}
          options={{
            title: 'Personal Information',
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          name='Application Progress'
          component={ApplicationProgress}
          options={{
            title: 'Application Progress',
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          name='Become Advisor'
          component={BecomeAdvisor}
          options={{
            title: 'Become Advisor',
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          name='Favorite University'
          component={FavoriteUniversity}
          options={{
            title: 'Favorite University',
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          name='Change Password'
          component={ChangePassword}
          options={{
            title: 'Change Password',
            headerTitleAlign: 'center'
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}