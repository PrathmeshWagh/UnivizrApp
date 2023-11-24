import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TitleWithText = ({ title, text }) => {
  return (
    <View style={styles.titleWithText}>
      <View style={styles.titleWithTextBox}>
        <Text>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
}

export default TitleWithText

const styles = StyleSheet.create({
  titleWithText: {
    borderBottomWidth: 4,
    borderColor: '#E8E8E8',
    paddingTop: 20
  },
  titleWithTextBox: {
    paddingHorizontal: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 20,
    color: 'black'
  }
})