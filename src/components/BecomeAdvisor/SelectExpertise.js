import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react';
import { ExpertiseData } from '../../Constants/ExpertiseData';
import { useState } from 'react';
import IconButton from '../UI/IconButton';



const SelectExpertise = ({ onPress }) => {
  // const [selectedExpertise, setSelectedExpertise] = useState(false);

  // function buttonPressed() {
  //   setSelectedExpertise(!selectedExpertise)
  // }

  function renderExpertiseData({ item }) {
    return (
      <Pressable style={styles.iconTextBtnbox} onPress={() => onPress(item)}>

        <View style={styles.iconAndText}>
          <View style={{ paddingRight: 10 }}>{item.icon}</View>
          <Text style={{ fontSize: 18 }}>{item.title}</Text>
        </View>

        <Pressable style={styles.checkButton} >
          {/* {selectedExpertise ?
            <IconButton icon={'check-circle'} size={40} color={'#6B0554'} />
            :
            <IconButton icon={'check-circle'} size={40} color={'#CFCFCF'} />
          } */}
          {item.button}
        </Pressable>
      </Pressable >
    )
  }

  return (
    <View>
      <FlatList
        data={ExpertiseData}
        keyExtractor={(item) => item.id}
        renderItem={renderExpertiseData}
      />
    </View>
  )
}


export default SelectExpertise

const styles = StyleSheet.create({
  iconTextBtnbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: '#808080',
    paddingVertical: 30
  },
  iconAndText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20
  },
  checkButton: {
    paddingRight: 20
  },
  // abc: {
  //   padding: 10
  // }
})