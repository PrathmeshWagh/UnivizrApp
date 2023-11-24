import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ConsultDurationButton = ({ name, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.btnContainer, { backgroundColor: color }]}>
      <Text style={styles.btnText}>{name}</Text>
    </Pressable>
  )
}

export default ConsultDurationButton

const styles = StyleSheet.create({
  btnContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
    marginRight: 12

  },
  btnText: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'center'
  }
})