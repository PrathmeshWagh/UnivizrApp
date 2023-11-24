import { StyleSheet, Text, View, ScrollView, Image, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import LargeButton from '../components/UI/LargeButton'
import Dropdown from '../components/UI/CustomDropDown/Dropdown';
import TextInputBox from '../components/UI/TextInputBox';
import { DropDownData } from '../Constants/DropDownData';
import ImagePicker from 'react-native-image-crop-picker';


const AddEducationInformation = ({ navigation }) => {
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


  function SubmitBtnHandler() {
    navigation.navigate('Profile')
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black', paddingBottom: 15 }}>Study Preferences</Text>
          <Dropdown title='Country' dropDowndata={DropDownData.Countries} />
          <Dropdown title='Program Level' dropDowndata={DropDownData.ProgramLevel} />
          <Dropdown title='Program Field' dropDowndata={DropDownData.ProgramField} />

          <View>
            <TextInputBox title='Program Field(Optional)' />
          </View>
        </View>

        <View style={{
          borderBottomWidth: 4,
          borderColor: '#E8E8E8',
        }} />

        <View style={styles.innerContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black', paddingBottom: 15 }}>Latest Education</Text>
          <Dropdown title='Degree' dropDowndata={DropDownData.Degree} />
          <Dropdown title='Field Of Study' dropDowndata={DropDownData.FieldOfSudy} />


          <View >
            <TextInputBox title='GPA' />
          </View>

          <View >
            <TextInputBox title='Year' />
          </View>
          <View>
            <TextInputBox title='Institution' />
          </View>

          <Text >Upload Your Document</Text>
          <Pressable style={styles.imgContainer} onPress={cameraPressHandler}>
            <View style={styles.imgBox}>
              {selectedImage && <Image source={{ uri: selectedImage }} style={styles.img} />}
            </View>
          </Pressable>




        </View>
      </ScrollView>
      <View style={styles.submitBtnContainer}>
        <LargeButton text='SUBMIT' onPress={SubmitBtnHandler} />
      </View>
    </View>
  )
}

export default AddEducationInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  innerContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  submitBtnContainer: {
    paddingVertical: 20
  },
  imgContainer: {
    // paddingTop: 20,
    marginBottom: 20
  },
  imgBox: {
    height: 250,
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    borderRadius: 4,
    marginTop: 15

  },
  img: {
    width: '100%',
    height: '100%'
  },
})