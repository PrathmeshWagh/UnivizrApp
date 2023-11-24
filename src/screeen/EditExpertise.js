import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Dropdown from '../components/UI/CustomDropDown/Dropdown';
import TextInputBox from '../components/UI/TextInputBox';
import LargeButton from '../components/UI/LargeButton';
import { DropDownData } from '../Constants/DropDownData';

const EditExpertise = ({ navigation }) => {

  function saveButtonHandler() {
    navigation.navigate('Expertise Details')
  }

  return (
    <View style={styles.container}>

      <View style={styles.innerContainer}>
        <View>
          <Dropdown
            title='Select Expertise'
            dropDowndata={DropDownData.ExpertiseData}
          />
        </View>

        <TextInputBox
          title='Service Rate'
          data='$25.00 '
        />

        <TextInputBox
          title='Note'
          data='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
      </View>

      <View style={{ paddingVertical: 20 }}>
        <LargeButton text='SAVE' onPress={saveButtonHandler} />
      </View>
    </View>
  )
}

export default EditExpertise

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20
  },
  innerContainer: {
    paddingHorizontal: 20
  }
})