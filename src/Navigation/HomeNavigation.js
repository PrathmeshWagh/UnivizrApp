import React from 'react'; // Don't forget to import React
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NotificationScreen from "../screeen/NotificationScreen";
import HomeScreen from "../screeen/HomeScreen";
import ConsultWithScreen from '../screeen/ConsultWithScreen';
import SearchScreen from '../screeen/SearchScreen';
import FilterScreen from '../screeen/FilterScreen';

// import IconButton from "../components/UI/IconButton";
// import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();



function HomeNavigation() {
  //const navigation = useNavigation(); // Move this inside the component

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      /*options={{
        headerTitle: '',
        headerRight: () => (
          <IconButton
            icon={'bell-alert'}
            color={'green'}
            size={20}
            onPress={() => {
              navigation.navigate('Notification');
            }}
          />
        ),
        headerLeft: () => (
          <IconButton icon={'map-marker'} color={'red'} size={20} />
        )
      }}*/
      />
      <Stack.Screen
        name='Notification'
        component={NotificationScreen}
        options={{
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name='ConsultWith'
        component={ConsultWithScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='FilterScreen'
        component={FilterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigation;
