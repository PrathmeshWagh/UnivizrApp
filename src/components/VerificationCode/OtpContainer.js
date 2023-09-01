import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { useState } from 'react';
import React from 'react'

const OtpContainer = ({ onChangeText, value }) => {
  const hasOtp = value !== ''

  return (
    <View style={[styles.otpBox, hasOtp && styles.selectedColor]}>
      <TextInput
        style={styles.inputBox}
        keyboardType='decimal-pad'
        maxLength={1}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  )
}

export default OtpContainer

const styles = StyleSheet.create({
  otpBox: {
    height: 60,
    width: 60,
    borderRadius: 8,
    marginRight: 30,
    borderWidth: 0.5,
    backgroundColor: '#E8E8E8',
  },
  selectedColor: {
    backgroundColor: '#6B0554'
  },
  inputBox: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  }
})