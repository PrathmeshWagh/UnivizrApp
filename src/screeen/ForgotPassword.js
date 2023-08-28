import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react';
import LargeButton from '../components/UI/LargeButton';
import IconButton from '../components/UI/IconButton';


const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
        <IconButton
          icon={"arrow-left"}
          size={35}
          color={"black"}
        // onPress={() => {
        //   navigation.navigate("Login");
        // }}
        />
        <View style={{ justifyContent: 'center', }}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Forgot Password</Text>
        </View>

      </View>
      <View>
        <Image source={require('../assest/forgot.png')} style={styles.imageContainer} resizeMode='contain' />
        <View style={styles.innerContainer}>
          <View style={{ alignItems: 'center', justifyContent: 'center', }}>
            <Text style={styles.forgottext}>Please enter the email address below,</Text>
            <Text style={styles.forgottext}>you will received a link to create a</Text>
            <Text style={styles.forgottext}>new password via email.</Text>

          </View>
          <View style={styles.emailBox}>
            <Text style={styles.email}>Email</Text>
            <TextInput placeholder='test@gmail.com' style={styles.input} />
          </View>
        </View>
      </View>
      <View style={styles.sendBtn}>
        <LargeButton text='SEND' />
      </View>

    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'space-between',

  },
  imageContainer: {
    width: '100%',

  },
  innerContainer: {
    paddingHorizontal: 20
  },
  forgottext: {
    opacity: 0.50,
    fontSize: 17
  },
  emailBox: {
    marginTop: 10,
    borderBottomWidth: 0.2
  },
  email: {
    paddingBottom: 20,
    fontWeight: 'bold',
    color: '#6B0554',
    fontSize: 17
  },
  input: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16
  },
  sendBtn: {
    marginBottom: 20
  }
})