import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react';
import LargeButton from '../components/UI/LargeButton';
import CustomHeader from '../components/CustomHeader';
import TextInputWithTitle from '../components/UI/TextInputWithTitle';


const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <CustomHeader headerText='Forgot Password' />
        <View style={{ marginTop: 30 }}>
          <Image source={require('../assest/forgot.png')} style={styles.imageContainer} resizeMode='contain' />
          <View style={styles.innerContainer}>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              <Text style={styles.forgottext}>Please enter the email address below,</Text>
              <Text style={styles.forgottext}>you will received a link to create a</Text>
              <Text style={styles.forgottext}>new password via email.</Text>
            </View>

            <TextInputWithTitle title='Email' placeholder={'test@gmail.com'} />

          </View>
        </View>
      </View>


      <View>
        <LargeButton text='SEND' />
      </View>

    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'space-between'
  },
  imageContainer: {
    width: '100%',
    marginBottom: 20
  },
  innerContainer: {
    paddingHorizontal: 10
  },
  forgottext: {
    opacity: 0.50,
    fontSize: 17
  },

})