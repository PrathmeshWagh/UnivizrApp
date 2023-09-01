import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import { useState } from 'react';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import LargeButton from '../components/UI/LargeButton';
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";

const PhoneNumber = ({ navigation }) => {
  const [value, setValue] = useState("");

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
            <PhoneInput

              defaultValue={value}
              defaultCode='IN'
              layout="first"
              onChangeText={(text) => {
                setValue(text);
              }} />
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
    // backgroundColor: '#FFFFFF'
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
    marginBottom: 20,
    fontWeight: 'bold'
  }
})