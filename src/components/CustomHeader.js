import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import IconButton from '../components/UI/IconButton';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ headerText }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View >
        <IconButton
          icon={"arrow-left"}
          size={35}
          color={"black"}
          onPress={navigation.goBack}
        />
      </View>

      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>

    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 20
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  }
})