import { StyleSheet, Text, View, Image, Pressable, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import IconButton from '../components/UI/IconButton';
import LargeButton from '../components/UI/LargeButton';
import TextInputBox from '../components/UI/TextInputBox';
import GenderButton from '../components/UI/GenderButton';
import CountrySelectorBox from '../components/EditProfile/CountrySelectorBox';
import PhoneNumberComp from '../components/UI/PhoneNumberComp';
import ImagePicker from 'react-native-image-crop-picker';


const EditProfile = ({ navigation }) => {
  const [value, setValue] = useState('');
  const [selectedImage, setSelectedImage] = useState(null)

  function saveButtonHandler() {
    navigation.navigate('Profile')
  }

  function cameraPressHandler() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setSelectedImage(image.path)
      }).catch((error) => {
        Alert.alert('ImagerPicker Error', error)
      })
  }

  return (
    <View style={styles.container}>

      <ScrollView style={styles.innerContainer}>
        <View style={styles.imageAndIconContainer}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.imgBox} />
          ) :
            <Image source={require('../assest/Abdullah.jpeg')} style={styles.imgBox} />
          }

          <Pressable style={styles.editIconBox} onPress={cameraPressHandler}>
            <IconButton icon={'camera-outline'} size={30} color={'white'} style={styles.editIcon} />
          </Pressable>
        </View>

        <View >
          <TextInputBox title='Username' data='Abdullah Algamdi' />
        </View>

        <View>
          <TextInputBox title='Email' data='test@gmail.com' />
        </View>

        <PhoneNumberComp data='8548965236' />

        <CountrySelectorBox title='Select Country' />

        <View >
          <TextInputBox title='Zip Code' data='365800' />
        </View>

        <View style={{ marginBottom: 20 }}>
          <GenderButton />
        </View>

      </ScrollView>

      <View style={{ paddingTop: 20 }}>
        <LargeButton text='SAVE' onPress={saveButtonHandler} />
      </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  innerContainer: {
    paddingHorizontal: 20,

  },
  imageAndIconContainer: {
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  imgBox: {
    width: 110,
    height: 110,
    borderRadius: 55
  },
  editIconBox: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#6B0554',
    position: 'absolute',
    right: 115,
    top: 95

  },
  editIcon: {
    position: 'absolute',
    left: 5,
    top: 5
  },

})