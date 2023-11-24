import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const TextInputWithTitle = ({ title, placeholder, passwordInput }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={passwordInput}
      />
    </View>
  )
}

export default TextInputWithTitle

const styles = StyleSheet.create({
  box: {
    borderBottomWidth: 0.2,
    borderBottomColor: '#808080',
    // marginBottom: 15
  },
  title: {
    fontWeight: 'bold',
    color: '#6B0554',
    fontSize: 15,
    paddingVertical: 20
  },
  input: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18
  },
})