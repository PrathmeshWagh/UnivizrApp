import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import TextInputBox from '../components/UI/TextInputBox'
import LargeButton from '../components/UI/LargeButton'


const ChangePassword = () => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, paddingTop: 30 }}>
        <View>
          <TextInputBox title='Current Password' passwordInput={true} />
        </View>
        <View >
          <TextInputBox title='New Password' passwordInput={true} />
        </View>
        <View >
          <TextInputBox title='Confirm Password' passwordInput={true} />
        </View>
      </View>

      <View style={styles.saveButton}>
        <LargeButton text="SAVE" />
      </View>
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  saveButton: {
    paddingVertical: 20
  }
})