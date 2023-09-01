import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import IconButton from "../UI/IconButton";

const ScholarshipItemRender = ({ title, onSelect, selectedValue }) => {

  const isSelected = selectedValue === title;
  color = isSelected ? "#6B0554" : "#CFCFCF";

  function HandlePress() {
    onSelect(title) // here on onSelect HandlePress  FUNCTION Call handleState function of Scholarship Component
  }

  return (
    <View style={styles.list1}>
      <Text style={styles.scholarshipListText}>{title}</Text>
      <IconButton
        icon={'check-circle'}
        size={30}
        color={color}
        onPress={HandlePress}
      />
    </View>
  )
}

export default ScholarshipItemRender

const styles = StyleSheet.create({
  list1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    height: 30,
    paddingLeft: 20,
    paddingRight: 15
  },
  scholarshipListText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },

})