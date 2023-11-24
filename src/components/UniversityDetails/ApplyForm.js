import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import TextInputBox from '../UI/TextInputBox';
import Dropdown from '../UI/CustomDropDown/Dropdown';
import { DropDownData } from '../../Constants/DropDownData';
import LargeButton from '../UI/LargeButton';
import { useNavigation } from '@react-navigation/native';

const ApplyForm = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.parentContainer}>
      <View >
        <View style={styles.container}>
          <TextInputBox title='Full Name' />
          <Dropdown title='Field of Study' dropDowndata={DropDownData.FieldOfStudyApply} />
          <Dropdown title='Level of Study' dropDowndata={DropDownData.ProgramLevel} />
          <Dropdown title='Degree' dropDowndata={DropDownData.Degree} />
          <TextInputBox title='Start Date' />
          <TextInputBox title='Add Fees' />
        </View>

        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <Text>Selected Scholarship</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 19, color: 'black', marginBottom: 100, paddingTop: 15 }}>Rashtriya Sanskrit Sansthan Scholarship</Text>
        </View>
      </View>

      <View>
        <LargeButton text='SAVE' onPress={() => navigation.navigate('Add Education Information')} />
      </View>

    </View>
  )
}

export default ApplyForm

const styles = StyleSheet.create({
  parentContainer: {
    paddingTop: 30,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'space-between'
  },
  container: {
    borderBottomWidth: 6,
    borderBottomColor: '#e8e8e8',
    paddingHorizontal: 20
  }
})