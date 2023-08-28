import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import EditEducationInfoBox from '../components/EducationInformation/EditEducationInfoBox';
import EditEduInfoBoxWithoutIcon from '../components/EducationInformation/EditEduInfoBoxWithoutIcon';
import LargeButton from '../components/UI/LargeButton';

const EditEducationInformation = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.innerContainer}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Study Preferences</Text>
          <EditEducationInfoBox
            title='Country'
            text='United Kingdom'
          />
          <EditEducationInfoBox
            title='Program Level'
            text='Master'
          />
          <EditEducationInfoBox
            title='Program Field'
            text='Program Field 1'
          />
          <EditEduInfoBoxWithoutIcon
            title='Program Name(optional)'
            text='Program 1'
          />
        </View>
        <View style={{ paddingBottom: 20, borderBottomWidth: 5, borderBottomColor: '#E8E8E8', }} />

        <View style={styles.innerContainer}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Latest Education</Text>
          <EditEducationInfoBox
            title='Degree'
            text='Msc IT'
          />
          <EditEducationInfoBox
            title='Field Of Study'
            text='Master'
            text1='Archaeology MScR'
          />
          <EditEduInfoBoxWithoutIcon
            title='GPA'
            text='4.0'
          />
          <EditEduInfoBoxWithoutIcon
            title='Year'
            text='2018-2019'
          />
          <EditEduInfoBoxWithoutIcon
            title='Institution'
            text='University Of Edinburgh'
          />

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
    marginTop: 20

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