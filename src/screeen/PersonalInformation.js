import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react';
import IconButton from '../components/UI/IconButton';
import EditEduInfoBoxWithoutIcon from '../components/EducationInformation/EditEduInfoBoxWithoutIcon';
import ImagePicker from 'react-native-image-crop-picker';

const PersonalInformation = () => {

  const [selectedImage, setSelectedImage] = useState(null)

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
    <ScrollView style={styles.container}>
      <View style={styles.imageAndIconContainer}>
        {
          selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.imgBox} />
          ) : (
            <Image source={require('../assest/Abdullah.jpeg')} style={styles.imgBox} />
          )
        }
        <Pressable style={styles.editIconBox} onPress={cameraPressHandler}>
          <IconButton icon={'camera-outline'} size={30} color={'white'} style={styles.editIcon} />
        </Pressable>
      </View>

      <View style={styles.contentContainer}>
        <EditEduInfoBoxWithoutIcon title='Username' text='Abdullah Algamdi' />
        <EditEduInfoBoxWithoutIcon title='Email' text='test@gmail.com' />
        <EditEduInfoBoxWithoutIcon title='Phone Number' text='+44 8548965236' />
        <EditEduInfoBoxWithoutIcon title='Country' text='United Kingdom' />
        <EditEduInfoBoxWithoutIcon title='Zip Code' text='365800' />
        <EditEduInfoBoxWithoutIcon title='Gender' text='Male' />
      </View>
    </ScrollView>
  )
}

export default PersonalInformation

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
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
  contentContainer: {
    marginBottom: 50
  }
})