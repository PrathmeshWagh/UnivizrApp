import { StyleSheet, Image, View, Text, TextInput, Alert } from 'react-native'
import React from 'react';
import { useState } from 'react';
import LargeButton from '../components/UI/LargeButton';
import CustomHeader from '../components/CustomHeader';
import OtpContainer from '../components/VerificationCode/OtpContainer';

const VerficationCode = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);



  function NextBtnHandler() {
    const VerificationCode = otp.join('');
    if (VerificationCode === '1111') {
      navigation.navigate('Login')
    }
    else {
      Alert.alert('Wrong Code')
    }

  }
  const handleOtpChange = (text, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = text;

    setOtp(updatedOtp);

  };
  return (
    <View style={styles.container}>
      <View style={styles.headerAndContent}>
        <CustomHeader headerText='Verification Code' />
        <Image source={require('../assest/verification1.png')} style={styles.imgBox} />
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 30 }}>
          <Text style={{ fontSize: 16 }}>Waiting for Automatically detect and SMS</Text>
          <View style={styles.wrongNumberText}>
            <Text style={{ fontSize: 15 }}>sent to +44 8548965236</Text>
            <Text style={{ fontSize: 16, paddingLeft: 5, color: 'orange' }}>Wrong number?</Text>
          </View>
        </View>

        <View style={styles.otpcontainer}>
          {otp.map((value, index) => (
            <OtpContainer
              key={index}
              onChangeText={(text) => handleOtpChange(text, index)}
              value={value}
            />
          ))}
        </View>
      </View>

      <View>
        <LargeButton text='VERIFY NOW' onPress={NextBtnHandler} />
      </View>
    </View>
  )
}

export default VerficationCode

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 20,
    backgroundColor: '#ffffff'
  },
  headerAndContent: {
    paddingHorizontal: 20
  },
  wrongNumberText: {
    flexDirection: 'row'
  },
  imgBox: {
    height: 250,

    width: '100%',
    marginTop: 20
  },
  otpcontainer: {
    paddingHorizontal: 10,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  }
})