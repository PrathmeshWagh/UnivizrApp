import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import EditEducationInfoBox from '../components/EducationInformation/EditEducationInfoBox';
import EditEduInfoBoxWithoutIcon from '../components/EducationInformation/EditEduInfoBoxWithoutIcon';
import LargeButton from '../components/UI/LargeButton';
import TextInputBox from '../components/UI/TextInputBox';
import Dropdown from '../components/UI/CustomDropDown/Dropdown';
import { DropDownData } from '../Constants/DropDownData';

const EditEducationInformation = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.innerContainer}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', paddingBottom: 15 }}>Study Preferences</Text>
          <Dropdown
            title='Country'
            dropDowndata={DropDownData.Countries}
          />

          <Dropdown
            title='Program Level'
            dropDowndata={DropDownData.ProgramLevel}
          />
          <Dropdown
            title='Program Field'
            dropDowndata={DropDownData.ProgramField}
          />
          <View>
            <TextInputBox
              title='Program Name(optional)'
              data='Program 1'
            />
          </View>
        </View>
        <View style={{ borderBottomWidth: 5, borderBottomColor: '#E8E8E8', }} />

        <View style={styles.innerContainer}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', paddingBottom: 15 }}>Latest Education</Text>

          <Dropdown
            title='Degree'
            dropDowndata={DropDownData.Degree}
          />
          <Dropdown
            title='Field Of Study'
            dropDowndata={DropDownData.FieldOfSudy}
          />

          <View >
            <TextInputBox
              title='GPA'
              data='4.0'
            />
          </View>

          <View >
            <TextInputBox
              title='Year'
              data='2018-2019'
            />
          </View>

          <View >
            <TextInputBox
              title='Institution'
              data='University Of Edinburgh'
            />
          </View>

          <View style={styles.imgContainer}>
            <Text>Edit document</Text>
            <View style={styles.imgBox}>
              <Image source={require('../assest/degree.jpeg')} style={styles.img} />
            </View>
          </View>
        </View>
      </View>


      <View style={styles.saveBtnContainer}>
        <LargeButton text='SAVE' />
      </View>

    </ScrollView>
  )
}

export default EditEducationInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  innerContainer: {
    marginHorizontal: 20,
    marginTop: 15

  },
  imgContainer: {
    paddingTop: 20,
    marginBottom: 50
  },
  imgBox: {
    paddingTop: 15,
    paddingRight: 10
    // backgroundColor: 'red'
  },
  img: {
    width: '100%',
  },
  saveBtnContainer: {
    marginBottom: 25
  }
})