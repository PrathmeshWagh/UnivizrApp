import { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import IconButton from "../UI/IconButton";
import ScholarshipItemRender from "./ScholarshipItemRender";



function Scholarship() {
  const [selectedValue, setSelectedValue] = useState(null)

  function HandleState(value) {
    setSelectedValue(value)
  }



  return (
    <View style={styles.scholarshipListContainer}>
      <Text style={{ marginLeft: 20, color: '#B9B9B9' }}>List Of Scholarship</Text>

      <ScholarshipItemRender selectedValue={selectedValue} onSelect={HandleState} title='Rashtriya Sanskrit Sansthan Scholarship' />
      <View style={{ borderBottomWidth: 0.3, }} />

      <ScholarshipItemRender selectedValue={selectedValue} onSelect={HandleState} title='UGC Resarch Associateship For Women' />
      <View style={{ borderBottomWidth: 0.3, }} />

      <ScholarshipItemRender selectedValue={selectedValue} onSelect={HandleState} title='Grants Commission SAARC Fellowship' />
      <View style={{ borderBottomWidth: 0.3, }} />

      <ScholarshipItemRender selectedValue={selectedValue} onSelect={HandleState} title='Jamila Millia Islamia JBT Scholarship' />
      <View style={{ borderBottomWidth: 0.3, }} />

      <View style={styles.ApplyBtnContainer}>
        <Pressable style={styles.ApplyBtn}>
          <Text style={styles.applybtnText}>APPLY</Text>
        </Pressable>
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
    marginTop: 160,
    marginLeft: 20,
    marginRight: 10
  },
  ApplyBtn: {
    marginRight: 10,
    backgroundColor: '#6B0554',
    borderRadius: 8,
    height: 50,
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