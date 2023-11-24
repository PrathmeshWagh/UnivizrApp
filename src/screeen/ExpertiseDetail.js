import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import EducationInfomationRender from '../components/EducationInformation/EducationInfomationRender';

const ExpertiseDetail = ({ navigation, route }) => {
  const SelectedItemName = route.params.selectedItemName



  function editHandler() {
    navigation.navigate('Edit Expertise Details')
  }

  function deleteHandler() {

  }
  return (
    <View style={styles.container}>
      <View>
        <EducationInfomationRender title='Selected Expertise' text={SelectedItemName} />
        <EducationInfomationRender title='Service Rate' text='$25.00' />
        <EducationInfomationRender
          title='Note'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
      </View>


      <View style={{ flexDirection: 'row', paddingVertical: 20, width: '100%', paddingHorizontal: 20 }}>
        <Pressable onPress={editHandler}
          style={styles.ApplyBtn}>
          <Text style={styles.applybtnText}>EDIT</Text>
        </Pressable>

        <Pressable onPress={deleteHandler}
          style={styles.ApplyBtn}>
          <Text style={styles.applybtnText}>DELETE</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ExpertiseDetail

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    justifyContent: 'space-between',
    flex: 1,

  },
  ApplyBtn: {
    backgroundColor: '#6B0554',
    borderRadius: 8,
    height: 60,
    width: '48%',
    marginRight: 15,


  },
  applybtnText: {
    textAlign: 'center',
    padding: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
})