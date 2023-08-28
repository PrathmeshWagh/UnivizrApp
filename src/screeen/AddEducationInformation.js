import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import LargeButton from '../components/UI/LargeButton'
import Dropdown from '../components/UI/CustomDropDown/Dropdown';
import EditEduInfoBoxWithoutIcon from '../components/EducationInformation/EditEduInfoBoxWithoutIcon';


const AddEducationInformation = () => {
  const [isimgPress, setImgPress] = useState(false)
  const DropDownData = {
    Countries: [
      { option: 'UnitedKingDom' },
      { option: 'United States' },
      { option: 'Caneda' },
      { option: 'Denmark' },
    ],
    ProgramLevel: [
      { option: 'ESF(English)Bachelor' },
      { option: 'Master' },
      { option: 'Phd' },
      { option: 'Other' },
    ],
    ProgramField: [
      { option: 'Program Field 1' },
      { option: 'Program Field 2' },
      { option: 'Program Field 3' },
      { option: 'Program Field 4' },
    ],
    Degree: [
      { option: 'MBA' },
      { option: 'Msc IT' },
      { option: 'Computer Education' },
      { option: 'Diploma' }
    ],
    FieldOfSudy: [
      { option: 'Master Of Arts' },
      { option: 'International Foundation Programme' },
      { option: 'Electrical Engineering' },
      { option: 'Diploma In Department' }
    ]

  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Study Preferences</Text>
          <Dropdown title='Country' dropDowndata={DropDownData.Countries} />
          <Dropdown title='Program Level' dropDowndata={DropDownData.ProgramLevel} />
          <Dropdown title='Program Field' dropDowndata={DropDownData.ProgramField} />
          <EditEduInfoBoxWithoutIcon title='Program Field(Optional)' text='Program Field 1' />
        </View>

        <View style={{
          marginTop: 20,
          borderBottomWidth: 4,
          borderColor: '#E8E8E8',
        }} />

        <View style={styles.innerContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Latest Education</Text>
          <Dropdown title='Degree' dropDowndata={DropDownData.Degree} />
          <Dropdown title='Field Of Study' dropDowndata={DropDownData.FieldOfSudy} />
          <EditEduInfoBoxWithoutIcon title='GPA' text='4.0' />
          <EditEduInfoBoxWithoutIcon title='Year' text='2018-2019' />
          <EditEduInfoBoxWithoutIcon title='Institution' text='University Of Edinburgh' />

          <Pressable style={styles.imgContainer} onPress={() => setImgPress(true)}>
            <Text>Upload Your Document</Text>
            <View style={styles.imgBox}>
              {isimgPress && <Image source={require('../assest/degree.jpeg')} style={styles.img} />}
            </View>
          </Pressable>




        </View>
      </ScrollView>
      <View style={styles.submitBtnContainer}>
        <LargeButton text='SUBMIT' />
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
  // dropDownboxWithoutIcon: {

  //   paddingHorizontal: 15,
  //   paddingVertical: 15,
  //   borderWidth: 0.5,
  //   borderColor: '#8e8e8e',
  //   borderRadius: 4
  // },
  submitBtnContainer: {
    marginBottom: 25
  },
  imgContainer: {
    paddingTop: 20,
    marginBottom: 50
  },
  imgBox: {
    height: 250,
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    borderRadius: 4,
    marginTop: 15
    // backgroundColor: 'red'
  },
  img: {
    width: '100%',
    height: '100%'
  },
})