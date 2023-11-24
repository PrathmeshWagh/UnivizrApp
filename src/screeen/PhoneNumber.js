import { StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native'
import { useState } from 'react';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import LargeButton from '../components/UI/LargeButton';
import CountryPicker from 'react-native-country-picker-modal';
import IconButton from '../components/UI/IconButton';


const PhoneNumber = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [countryCode, setCountryCode] = useState('US');
  const [initialValue, setInitialValue] = useState('8548365236')

  function onSelect(country) {
    setCountryCode(country.cca2);
    setIsVisible(false)
  }

  function openModal() {
    setIsVisible(true)
  }

  function NextBtnHandler() {
    navigation.navigate('Verification Code')
  }
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <CustomHeader headerText='Phone Number' />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.imgAndText}>
            <Image source={require('../assest/mail.jpeg')} style={styles.imageBox} />
            <Text style={{ fontSize: 15 }}>We will send you a verificatiocode </Text>
            <Text style={{ fontSize: 15 }}>to verify your phone number</Text>
          </View>
          <View>
            <Text style={styles.phoneNumberText}>Phone Number</Text>
            <View style={styles.iconAndText}>
              <CountryPicker
                countryCode={countryCode}
                withCallingCodeButton
                withFlagButton
                withAlphaFilter
                withFlag
                onSelect={onSelect}
                visible={isVisible}
              />
              <IconButton icon={'menu-down'} size={35} onPress={openModal} />
              <Text style={{ paddingRight: 10 }}>|</Text>
              <TextInput
                value={initialValue}
                onChangeText={text => setInitialValue(text)}
                style={styles.inputNumber}
                keyboardType='decimal-pad'
              />
            </View>
          </View>
        </View>
      </View>

      <View>
        <LargeButton text='NEXT' onPress={NextBtnHandler} />
      </View>
    </View>
  )
}

export default PhoneNumber

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 20,

  },
  header: {
    paddingHorizontal: 20
  },
  imgAndText: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25

  },
  imageBox: {
    width: '100%',
  },
  phoneNumberText: {
    color: '#6B0554',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.4,
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