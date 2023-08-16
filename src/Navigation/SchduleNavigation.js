import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UpcomingScheduleScreen from '../screeen/UpcomingSchedule'


const Tab = createMaterialTopTabNavigator();

function SchduleNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Upcoming' component={UpcomingScheduleScreen} />

    </Tab.Navigator>
  )
}

export default SchduleNavigation;