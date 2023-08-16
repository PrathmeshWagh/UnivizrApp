import { StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalColor } from '../Constants/color';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('AllNavigation'); // Navigate to the Home screen after 3 seconds
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.text}>univizr</Text>
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalColor.colors.colpurp,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: GlobalColor.colors.colblac,
  },
});


