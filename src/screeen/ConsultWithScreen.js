import { Text, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import One from "./One";
import Two from "./Two";

const Tab = createMaterialTopTabNavigator();



function ConsultWithScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="One" component={One} />
      <Tab.Screen name="Two" component={Two} />
    </Tab.Navigator>
  )
}

export default ConsultWithScreen;

const styles = StyleSheet.create({
  HeaderTextAndIcon: {
    flexDirection: 'row',
  },
  headerText: {

    fontWeight: 'bold'
  },
})
