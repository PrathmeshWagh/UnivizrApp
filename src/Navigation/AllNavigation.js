import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import SchduleNavigation from './SchduleNavigation';
import ChatNavigation from './ChatNavigation';
import PaymentNavigation from './PaymentNavigation';
import ProfileNavigation from './ProfileNavigation';
import IconButton from '../components/UI/IconButton';



const BottomTab = createBottomTabNavigator();

function AllNavigation() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name='Home'
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="home-account" size={size} color={color} />
          )
        }}
      />
      <BottomTab.Screen name='Schedule'
        component={SchduleNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="calendar-month-outline" size={size} color={color} />
          )
        }}
      />
      <BottomTab.Screen name='Chat'
        component={ChatNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="chat-processing-outline" size={size} color={color} />
          )
        }}
      />
      <BottomTab.Screen name='Payment'
        component={PaymentNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="credit-card-outline" size={size} color={color} />
          )
        }}
      />
      <BottomTab.Screen name='Profile'
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="account" size={size} color={color} />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}
export default AllNavigation;