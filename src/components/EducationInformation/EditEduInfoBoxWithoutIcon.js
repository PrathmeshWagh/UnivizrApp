import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'


const EditEduInfoBoxWithoutIcon = ({ title, text }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.textandIcon}>
        <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>{text}</Text>
      </View>
    </View>
  )
}

export default EditEduInfoBoxWithoutIcon

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  textandIcon: {
    marginTop: 15,
    paddingVertical: 20,
    borderWidth: 0.5,
    borderRadius: 4,
    paddingHorizontal: 12,
    borderColor: '#8e8e8e',
  }
})