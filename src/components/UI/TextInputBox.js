import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const TextInputBox = ({ title, data, passwordInput }) => {
  const [initialValue, setInitialValue] = useState(data)

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, }}>{title}</Text>
      <View style={styles.textInputBox}>
        <TextInput
          style={styles.input}
          value={initialValue}
          secureTextEntry={passwordInput}
          onChangeText={text => setInitialValue(text)}
          multiline={true}
        />
      </View>
    </View>
  )
}

export default TextInputBox

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20
  },
  textInputBox: {
    marginTop: 15,
    borderWidth: 0.2,
    borderRadius: 2,
    borderColor: '#808080',
    paddingLeft: 15,
    borderColor: 'black',
    paddingVertical: 5
  },
  input: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black'
  }
})