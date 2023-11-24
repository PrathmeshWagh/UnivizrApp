import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useState } from 'react';
import IconButton from '../UI/IconButton';
import { useNavigation } from '@react-navigation/native';
import LogoutModal from '../UI/LogoutModal';

const CustomHeaderLogout = ({ headerText }) => {

  const navigation = useNavigation()

  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const toggleLogoutModal = () => {
    setLogoutModalVisible(!isLogoutModalVisible);

  };

  const handleLogout = () => {
    navigation.navigate('Login')

    // Close the modal
    setLogoutModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerTextContainer}>
        <View style={{ flex: 1, alignItems: 'center', paddingLeft: 35 }}>
          <Text style={styles.headerText}>{headerText}</Text>
        </View>
        <View style={{ paddingRight: 10 }}>
          <IconButton
            icon={"logout"}
            size={30}
            color="#6B0554"
            onPress={toggleLogoutModal}
          />
        </View>
      </View>
      <LogoutModal
        visible={isLogoutModalVisible}
        onClose={toggleLogoutModal}
        onLogout={handleLogout}
      />
    </View>
  )
}

export default CustomHeaderLogout

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#E8E8E8',

  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22
  }
})