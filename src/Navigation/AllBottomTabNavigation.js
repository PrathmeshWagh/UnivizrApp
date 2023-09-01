import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import ScheduleScreen from '../screeen/ScheduleScreen';
import ChatScreen from '../screeen/ChatScreen';
import PaymentScreen from '../screeen/PaymentScreen';
import ProfileScreen from '../screeen/ProfileScreen';
import IconButton from '../components/UI/IconButton';
import LoginScreen from '../screeen/LoginScreen';





const BottomTab = createBottomTabNavigator();

function AllBottomTabNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#6B0554',
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,

        },
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontWeight: 'bold',
          paddingBottom: 5
        }


      }}>
      <BottomTab.Screen
        name='Home'
        component={HomeNavigation}
        options={{
          title: 'HOME',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="home-account" size={size} color={color} />
          ),

        }}
      />
      <BottomTab.Screen name='Schedule'
        component={ScheduleScreen}
        options={{
          headerTitle: 'Schedule',
          headerTitleAlign: 'center',
          title: 'SCHEDULE',
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="calendar-month-outline" size={size} color={color} />
          ),
        }}
      />
      < BottomTab.Screen name='Chat'
        component={ChatScreen}
        options={{
          title: 'CHAT',
          headerTitle: 'Chat',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="chat-processing-outline" size={size} color={color} />
          )
        }}
      />
      < BottomTab.Screen name='Payment'
        component={PaymentScreen}
        options={{
          title: 'PAYMENT',
          headerTitle: 'Payment',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="credit-card-outline" size={size} color={color} />
          )
        }}
      />

      < BottomTab.Screen name='Login'
        component={LoginScreen}
        options={{
          title: 'LOGIN',
          headerTitle: 'Login',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="account" size={size} color={color} />
          )
        }}
      />
      < BottomTab.Screen name='Profile'
        component={ProfileScreen}
        options={{
          title: 'PROFILE',
          headerTitle: 'Profile',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="account" size={size} color={color} />
          ),
          headerRight: () => (
            <IconButton
              icon={"logout"}
              size={30}
              color="#6B0554"
              onPress={() => {

              }}
              style={{ marginRight: 10 }}
            />

          )
        }}
      />



    </BottomTab.Navigator >
  )
}
export default AllBottomTabNavigation;