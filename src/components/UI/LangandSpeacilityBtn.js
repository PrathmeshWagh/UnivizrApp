import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const LangandSpeacilityBtn = ({ name }) => {
  return (
    <Pressable style={[styles.btnContainer]}>
      <Text style={styles.btnText}>{name}</Text>
    </Pressable>
  )
}

export default LangandSpeacilityBtn

const styles = StyleSheet.create({
  btnContainer: {
    minWidth: 70,
    borderRadius: 4,
    backgroundColor: 'green',
    marginRight: 15
  },
  btnText: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'center'
  }
})