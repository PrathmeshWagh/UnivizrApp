import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import React from 'react';
import { useState } from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import IconButton from './IconButton';



const PhoneNumberComp = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [countryCode, setCountryCode] = useState('US');
  const [initialValue, setInitialValue] = useState(data)

  function onSelect(country) {
    setCountryCode(country.cca2);
    setIsVisible(false)
  }

  function openModal() {
    setIsVisible(true)
  }

  return (
    <View>
      <Text style={{ paddingBottom: 10, }}>Phone Number</Text>
      <View style={styles.iconAndText}>
        <Pressable onPress={openModal}>
          <CountryPicker
            countryCode={countryCode}
            withCallingCodeButton
            withFlagButton
            withAlphaFilter
            withFlag
            onSelect={onSelect}
            visible={isVisible}
          />
        </Pressable>
        {/* <IconButton icon={'triangle-down'} sizeonPress={openModal} /> */}
        <View >
          <IconButton icon={'menu-down'} size={35} onPress={openModal} />
        </View>
        <Text style={{ paddingRight: 10 }}>|</Text>
        <TextInput
          value={initialValue}
          onChangeText={text => setInitialValue(text)}
          style={styles.inputNumber}
          keyboardType='decimal-pad'
        />
      </View>
    </View>
  )
}

export default PhoneNumberComp

const styles = StyleSheet.create({
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderRadius: 4,
    borderColor: '#808080',
    paddingLeft: 10,
    marginBottom: 25,
    paddingVertical: 5
  },
  inputNumber: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18
  }
})