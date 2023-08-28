import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconButton from '../UI/IconButton'

const EditEducationInfoBox = ({ title, text, text1 }) => {
  var Title = 'Field Of Study'
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      {Title === title ?
        <View>
          <View style={styles.textBoxandIcon}>
            <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>{text}</Text>
            <IconButton icon={'chevron-down'} size={25} />
          </View>
          <View style={styles.textBoxandIcon}>
            <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>{text1}</Text>
            <IconButton icon={'chevron-down'} size={25} />
          </View>
        </View>
        :
        <View style={styles.textBoxandIcon}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>{text}</Text>
          <IconButton icon={'chevron-down'} size={25} />
        </View>
      }
    </View>
  )
}

export default EditEducationInfoBox

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,

  },
  textBoxandIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingVertical: 15,
    borderWidth: 0.5,
    borderRadius: 4,
    paddingHorizontal: 12
  },
})