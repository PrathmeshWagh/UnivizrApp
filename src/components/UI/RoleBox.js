import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RoleBox = ({ role, color }) => {

  const ContainerStyling = {
    ...styles.roleBoxContainer,
    backgroundColor: color
  }

  return (
    <View style={ContainerStyling}>
      <Text style={styles.roleText}>{role}</Text>
    </View>
  )
}

export default RoleBox

const styles = StyleSheet.create({
  roleBoxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 60,
    maxWidth: 60,
    minHeight: 20,
    maxHeight: 20,
    borderRadius: 5,
  },
  roleText: {
    fontSize: 10,
    color: 'white',
    paddingHorizontal: 4,

  },
  greenBox: {
    backgroundColor: 'green'
  }

})