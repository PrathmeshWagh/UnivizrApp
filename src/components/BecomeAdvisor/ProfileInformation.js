import { StyleSheet, Text, View, Pressable, Image, Alert } from 'react-native'
import React from 'react';
import { useState } from 'react';
import TextInputBox from '../UI/TextInputBox';
import Dropdown from '../UI/CustomDropDown/Dropdown';
import { DropDownData } from '../../Constants/DropDownData';
import MutliSelectDropdown from '../UI/CustomDropDown/MutliSelectDropdown';
import ImagePicker from 'react-native-image-crop-picker';

const ProfileInformation = () => {

  const [selectedImage, setSelectedImage] = useState(null)

  function cameraPressHandler() {
    ImagePicker.openPicker({
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
      <Text>Add Cover Photo</Text>
      <Pressable style={styles.imgContainer} onPress={cameraPressHandler}>
        <View style={styles.imgBox}>
          {selectedImage && <Image source={{ uri: selectedImage }} style={styles.img} />}
        </View>
      </Pressable>

      <TextInputBox title='Full Name' data='Abdullah Saleem Algamdi' />
      <Dropdown title='Advsior Type' dropDowndata={DropDownData.AdvisorType} />
      <Dropdown title='Degree Level' dropDowndata={DropDownData.DegreeLevel} />
      <Dropdown title='University Name' dropDowndata={DropDownData.UniversityName} />

      <MutliSelectDropdown
        title='Language'
        dropDowndata={DropDownData.Language}
      />

      <TextInputBox title='Skill Tag' data='#Marketing, #Artist, #design' />

      <TextInputBox
        title='Bio'
        data='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      <Text style={{ fontSize: 13, marginTop: -15, paddingBottom: 20 }}>Maximum 500 Charactor</Text>

    </View>
  )
}

export default ProfileInformation

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  imgContainer: {
    paddingBottom: 20
  },
  imgBox: {
    height: 200,
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    borderRadius: 8,
    marginTop: 20
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 8
  },
})