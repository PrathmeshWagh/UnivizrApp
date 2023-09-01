import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
// import CheckBox from '@react-native-community/checkbox';
// import { useState } from 'react';
import LargeButton from '../components/UI/LargeButton';
import CheckBox from '@react-native-community/checkbox';


const LoginScreen = ({ navigation }) => {
  // const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [isChecked, setIsChecked] = useState(false);

  const forgotPressHandler = () => {
    navigation.navigate('Forgot Password')
  }

  function RegisterHandlerPress() {
    navigation.navigate('User Registration')
  }
  function loginButtonPressed() {
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assest/transparentImg.jpeg')} style={styles.imageBox} />
        <View style={styles.contentContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"

          />

          <Text style={styles.label2}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox tintColors={{ true: '#6B0554', false: '#808080' }} disabled={false} value={isChecked} onValueChange={(value) => setIsChecked(value)} />
              <Text style={styles.rememberAndForgotText}>Remember Me</Text>
            </View>
            <Pressable onPress={forgotPressHandler}>
              <Text style={styles.rememberAndForgotText}>Forgot Password?</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <LargeButton text='LOGIN' onPress={loginButtonPressed} />
      <View style={styles.bottomContainer}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.orText}>OR</Text>
        </View>

        <View style={styles.LoginImgBoxContainer}>
          <Image source={require('../assest/google.png')} style={styles.LoginimgBox} />
          <Image source={require('../assest/FB.png')} style={styles.LoginimgBox} />
          <Image source={require('../assest/weChat.png')} style={styles.LoginimgBox} />
        </View>

        <Pressable style={{ flexDirection: 'row', }} onPress={RegisterHandlerPress}>
          <Text style={styles.registerTextSentence}>Don't have an Account? </Text>
          <Text style={[styles.registerTextSentence, styles.registerWord]}>Register</Text>
        </Pressable>

      </View>

    </View>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBox: {
    width: '100%',
  },
  contentContainer: {
    marginHorizontal: 20
  },
  label: {
    color: '#6B0554',
    fontSize: 15,
    marginBottom: 8,
    fontWeight: 'bold'
  },
  label2: {
    paddingTop: 20,
    color: '#6B0554',
    fontSize: 15,
    marginBottom: 8,
    fontWeight: 'bold'
  },
  input: {
    fontWeight: 'bold',
    fontSize: 18,
    borderBottomWidth: 0.5,
    marginBottom: 16,
  },
  rememberAndForgotText: {
    color: 'black',
    fontSize: 17,

  },
  bottomContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  orText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  },
  LoginImgBoxContainer: {
    flexDirection: 'row',
    marginVertical: 15

  },
  LoginimgBox: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginHorizontal: 20

  },
  registerTextSentence: {
    fontSize: 21,
    color: 'black'
  },
  registerWord: {
    fontWeight: 'bold'
  }
})