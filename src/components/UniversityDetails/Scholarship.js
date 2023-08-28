import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import IconButton from "../UI/IconButton";



function Scholarship() {
  return (
    <View style={styles.scholarshipListContainer}>
      <Text style={{ marginLeft: 20, color: '#B9B9B9' }}>List Of Scholarship</Text>
      <View style={styles.list1}>
        <Text style={styles.scholarshipListText}>Rashtriya Sanskrit Sansthan Scholarship</Text>
        <IconButton
          icon={'check-circle'}
          size={30}
          color={"#6B0554"}
        />
      </View>
      <View style={{ borderBottomWidth: 0.3, }} />

      <View style={styles.list1}>
        <Text style={styles.scholarshipListText}>UGC Resarch Associateship For Women</Text>
        <IconButton
          icon={'check-circle'}
          size={30}
          color={"#CFCFCF"}
        />
      </View>

      <View style={{ borderBottomWidth: 0.3, }} />
      <View style={styles.list1}>
        <Text style={styles.scholarshipListText}>Grants Commission SAARC Fellowship</Text>
        <IconButton
          icon={'check-circle'}
          size={30}
          color={"#CFCFCF"}
        />
      </View>

      <View style={{ borderBottomWidth: 0.3, }} />
      <View style={styles.list1}>
        <Text style={styles.scholarshipListText}>Jamila Millia Islamia JBT Scholarship</Text>
        <IconButton
          icon={'check-circle'}
          size={30}
          color={"#CFCFCF"}
        />
      </View>
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
    marginLeft: 20
  },
  scholarshipListText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  ApplyBtnContainer: {
    marginTop: 160,
    marginLeft: 25,
    marginRight: 15
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
  }
})