import { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import ScholarshipItemRender from "./ScholarshipItemRender";
import LargeButton from "../UI/LargeButton";


function Scholarship() {
  const [selectedValue, setSelectedValue] = useState(null)

  function HandleState(value) {
    setSelectedValue(value)
  }



  return (
    <View style={styles.scholarshipListContainer}>
      <View>
        <Text style={{ marginLeft: 20, color: '#B9B9B9' }}>List Of Scholarship</Text>

        <ScholarshipItemRender selectedValue={selectedValue} onSelect={HandleState} title='Rashtriya Sanskrit Sansthan Scholarship' />
        <View style={{ borderBottomWidth: 0.3, }} />

        <ScholarshipItemRender selectedValue={selectedValue} onSelect={HandleState} title='UGC Resarch Associateship For Women' />
        <View style={{ borderBottomWidth: 0.3, }} />

        <ScholarshipItemRender selectedValue={selectedValue} onSelect={HandleState} title='Grants Commission SAARC Fellowship' />
        <View style={{ borderBottomWidth: 0.3, }} />

        <ScholarshipItemRender selectedValue={selectedValue} onSelect={HandleState} title='Jamila Millia Islamia JBT Scholarship' />
        <View style={{ borderBottomWidth: 0.3, }} />
      </View>

      <View style={styles.ApplyBtnContainer}>
        <LargeButton text='APPLY' />
      </View>
    </View>
  )
}

export default Scholarship;

const styles = StyleSheet.create({
  scholarshipListContainer: {
    marginTop: 20,
    justifyContent: 'space-between'

  },
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
  ApplyBtnContainer: {
    marginTop: 180
  },
  ApplyBtn: {
    marginRight: 10,
    backgroundColor: '#6B0554',
    borderRadius: 8,

  },
  applybtnText: {
    textAlign: 'center',
    padding: 15,
    color: 'white',
    fontWeight: 'bold'
  },
  onPressColor: {
    color: "#6B0554"
  },
  withoutPressColor: {
    color: "#CFCFCF"
  }

})