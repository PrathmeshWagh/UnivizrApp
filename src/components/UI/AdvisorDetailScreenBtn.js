import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AdvisorDetailScreenBtn = ({ name, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.btnContainer, { backgroundColor: color }]}>
      <Text style={styles.btnText}>{name}</Text>
    </Pressable>
  )
}

export default AdvisorDetailScreenBtn

const styles = StyleSheet.create({
  btnContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,

  },
  btnText: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'center'
  }
})